import {NotesActionsType, NoteType} from "./notes-action-creator";

type InitialStateType = typeof initialState
const initialState = {
    notes: [] as Array<NoteType>
}

const notesReducer = (state = initialState, action: NotesActionsType): InitialStateType => {
    switch (action.type) {
        case 'NOTE/CREATE_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case 'NOTE/SET_NOTES':
            return {
                ...state,
                notes: [...action.notes]
            }
        case "NOTE/UPDATE_NOTE":
        {
            state.notes[state.notes.findIndex(note => note.id === action.note.id)] = action.note
            return{
                ...state,
                notes: [
                    ...state.notes,
                ]
            }
        }
        case "NOTE/DELETE_NOTE":
            return{
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.id)
            }

        default:
            return state
    }
}

// postsData: action.isDeleted
//     ? [...state.postsData].filter(post => post.id !== action.postId)
//     : [...state.postsData]

export default notesReducer