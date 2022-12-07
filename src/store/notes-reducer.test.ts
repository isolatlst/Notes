import {notesACs} from "./notes-action-creator";
import notesReducer from "./notes-reducer";

const initialState = {
    notes: [
        {
            id: 1,
            title: 'Some title',
            text: 'Lorem ipsum #dolor sit ##amet, consec#tetur #adipisicing elit. Delectus eius, eligendi esse fuga illo iure qui!',
            tags: ['']
        }
    ]
}

test('add-new-note', ()=>{
    const note =  {
        id: 3,
        title: 'Title',
        text: 'Lorem ipsum #dolor sit ##amet',
        tags: ['#123', '#asd']
    }
    const action = notesACs.addNote(note)
    const initialStateCopy = {...initialState, notes:[...initialState.notes]}

    const newState = notesReducer(initialStateCopy, action)

    expect(shallowCompare(newState.notes[newState.notes.length-1], note))
        .toBe(true)
})

test('NOTE/UPDATE_NOTE', ()=>{
    const note = {
        id: 1,
        title: 'Change',
        text: 'Some other text',
        tags: ['#tag1','#tag2']
    }
    const action = notesACs.updateNote(note)
    const initialStateCopy = {...initialState, notes:[...initialState.notes]}
    const newState = notesReducer(initialStateCopy, action)
    expect(newState.notes.length).toBe(1)
})


const shallowCompare = (stateNote: any, Note: any) => {
    for (let key in Note){
        if(stateNote[key] !== Note[key]) return false;
    }
    return true;
}