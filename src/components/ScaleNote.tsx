import React from "react";
import modalClasses from "../styles/Modal.module.scss";
import classes from "../styles/ScaleNote.module.scss";
import settings from "../assets/settings.svg"

type PropsType = {
    id: number
    title: string
    text: string
    tags: Array<string>
    setIsNoteEdit: () => void
    toggle: () => void
}


const ScaleNote: React.FC<PropsType> = ({title, text, tags,setIsNoteEdit, toggle}) => {

    return (
        <div className={modalClasses.modal} onClick={toggle}>
            <div className={modalClasses.modal__body} onClick={e=> e.stopPropagation()}>
                <img src={settings} alt="Edit" className={classes.note__settings} onClick={setIsNoteEdit}/>
                <div className={classes.note__title}>{title}</div>
                <div className={classes.note__body}>
                    <div className={classes.note__text}>{text}</div>
                    <div className={classes.note__tags}>
                        {
                            tags.map((tag,index) => (
                                <span key={index} className={classes.note__tag}>{tag}&nbsp;</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ScaleNote;