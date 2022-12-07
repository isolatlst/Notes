import classes from '../styles/Notes.module.scss'
import Note from "./Note";
import React from "react";
import {useAppSelector} from "../store/store";


const Notes = () => {
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(notesACsSaga.fetchNotes())
    // }, [])

    const notes = useAppSelector(state => state.notes.notes)


    return (
        <main className={classes.notes}>
            {
                notes.map(note => (<Note {...note} key={note.id}/>))
            }
        </main>
    );
}


export default Notes;