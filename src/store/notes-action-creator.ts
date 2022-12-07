import {InferActionsTypes} from "./store";

export const NOTES__FETCH_NOTES = 'NOTES/FETCH_NOTES'
export const NOTES__CREATE_NOTE = 'NOTES/CREATE_NOTE'
export const NOTES__PUT_NOTE = 'NOTES/UPDATE_NOTE'
export const NOTES__DELETE_NOTE = 'NOTES/DELETE_NOTE'
export const NOTES__SEARCH_NOTE = 'NOTES/SEARCH_NOTE'

export type NotesActionsType = InferActionsTypes<typeof notesACs>
export type NoteType = {
    id: number
    title: string
    text: string
    tags: Array<string>
}

export const notesACs = {
    addNote: (note: NoteType) => ({type: 'NOTE/CREATE_NOTE', note} as const),
    updateNote: (note: NoteType) => ({type: 'NOTE/UPDATE_NOTE', note} as const),
    removeNote: (id: number) => ({type: 'NOTE/DELETE_NOTE', id} as const),
    setNotes: (notes: Array<NoteType> | []) => ({type: 'NOTE/SET_NOTES', notes} as const),
}

export const notesACsSaga = {
 // fetchNotes: () => ({type: NOTES__FETCH_NOTES}),
    createNote: (note: NoteType) => ({type: NOTES__CREATE_NOTE, note}),
    putNote: (note: NoteType) => ({type: NOTES__PUT_NOTE, note}),
    deleteNote: (id: number) => ({type: NOTES__DELETE_NOTE, id}),
    searchNote: (tag: string) => ({type: NOTES__SEARCH_NOTE, tag})
}