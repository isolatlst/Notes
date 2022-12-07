import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {NOTES__CREATE_NOTE, NOTES__DELETE_NOTE, NOTES__FETCH_NOTES, NOTES__PUT_NOTE, NOTES__SEARCH_NOTE, notesACs, notesACsSaga, NoteType} from "../store/notes-action-creator";

const SERVER_URL = 'https://various-cactus-roar.glitch.me/notes'

const fetchNotes = () => axios.get(SERVER_URL)
const createNote = (note: NoteType) => axios.post(SERVER_URL, {...note})
const putNote = (note: NoteType) => axios.put(`${SERVER_URL}/${note.id}`, {...note})
const deleteNote = (id: number) => axios.delete(`${SERVER_URL}/${id}`)
const searchNote = (tag: string) => axios.get(`${SERVER_URL}?tags_like=${tag[0] ==="#" ? tag.substring(1) : tag}`)

function* fetchNotesWorker(){
    const {data} = yield call(fetchNotes)
    yield put(notesACs.setNotes(data))
}

function* createNoteWorker({note} : ReturnType<typeof notesACsSaga.createNote>){
    const {data} = yield call(createNote, note)
    yield put(notesACs.addNote(data))
}

function* updateNoteWorker({note} : ReturnType<typeof notesACsSaga.putNote>){
    const {data} = yield call(putNote, note)
    yield put(notesACs.updateNote(data))
}

function* deleteNoteWorker ({id} : ReturnType<typeof notesACsSaga.deleteNote>){
    yield call(deleteNote, id)
    yield put(notesACs.removeNote(id))
}

function* searchNoteWorker ({tag}: ReturnType<typeof notesACsSaga.searchNote>){
    const {data} = yield call(searchNote, tag)
    yield put(notesACs.setNotes(data))
}

export function* notesWatcher() {
    yield takeEvery(NOTES__FETCH_NOTES, fetchNotesWorker)
    yield takeEvery(NOTES__CREATE_NOTE, createNoteWorker)
    yield takeEvery(NOTES__PUT_NOTE, updateNoteWorker)
    yield takeEvery(NOTES__DELETE_NOTE, deleteNoteWorker)
    yield takeEvery(NOTES__SEARCH_NOTE, searchNoteWorker)
}