import classes from '../styles/Notes.module.scss'
import Note from "./Note";


const Notes = () => {
    return (
        <main className={classes.notes}>
            <Note text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi culpa, dicta dolores eius eos et, labore maiores officiis provident quae ratione similique, sunt suscipit velit voluptate. Dolore, similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque cumque dicta distinctio facere fugit illo quaerat saepe sed totam! Asperiores assumenda consequatur cum eveniet facilis itaque officiis, omnis quibusdam!'/>
            <Note/>
            <Note/><Note/><Note/><Note/><Note/><Note/>
            <Note text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi culpa, dicta dolores eius eos et, labore maiores officiis provident quae ratione similique, sunt suscipit velit voluptate. Dolore, similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque cumque dicta distinctio facere fugit illo quaerat saepe sed totam! Asperiores assumenda consequatur cum eveniet facilis itaque officiis, omnis quibusdam!'/>
            <Note/><Note/><Note/><Note/><Note/>
        </main>
    );
}


export default Notes;