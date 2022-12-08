import classes from '../styles/Note.module.scss'
import React from "react";
import {Modal, useModal} from "./common/Modal";

type PropsType = {
    id: number
    title: string
    text: string
    tags: Array<string>
}


const Note: React.FC<PropsType> = ({title, text, tags,id}) => {
    const {isOpen, toggle} = useModal()

    let titleLength = 18
    let textLength = 430


    return (
        <>
            {isOpen && <Modal isOpen={isOpen} toggle={toggle} initialValues={{id, title, text, tags, tag: ''}}/>}
            <div className={classes.note} onClick={toggle}>
                <div className={classes.note__title}>
                    {title.length > titleLength ? `${title.slice(0, titleLength)}...` : title}
                </div>
                <div className={classes.note__body}>
                    <div className={classes.note__text}>
                        {text.length > textLength ? `${text.slice(0, textLength)}...` : text}
                    </div>
                    <div className={classes.note__tags}>
                        {tags.length
                            ? tags.map(tag => <span key={Date.now() + Math.random() * 1000}>{tag} </span>)
                            : ''
                        }
                    </div>
                </div>
            </div>
        </>
    );
}


export default Note;