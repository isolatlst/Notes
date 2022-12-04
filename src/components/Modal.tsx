import React, {useEffect, useState} from "react";
import classes from "../styles/Modal.module.scss";
import {createPortal} from "react-dom";

type PropsType = {
    // text: string
    isOpen: boolean
    toggleIsOpen: () => void
}
type ModalType = (params: PropsType) => React.ReactPortal | null



export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return {isOpen, toggle}
}

export const Modal: ModalType = ({isOpen, toggleIsOpen}) => {
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 27 && isOpen) {
            toggleIsOpen();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {
            document.removeEventListener('keydown', onKeyDown, false);
        };
    }, [isOpen])

    return isOpen
        ? createPortal(
            <div className={classes.modal} onClick={toggleIsOpen}>
                <div className={classes.modal__body} onClick={(e) => e.stopPropagation()}>
                    <div className={classes.modal__header}>Create New Note</div>
                    <label className={classes.modal__title}>
                        <span className={classes.modal__text}>Title:</span>
                        <input className={classes.modal__input} type="text"
                            name="title" autoFocus={true} placeholder='Title'/>
                    </label>
                    <label className={classes.modal__description}>
                        <span className={classes.modal__text}>Text:</span>
                        <textarea name="text" placeholder='Type something'></textarea>
                        {/*<input autoFocus={true} className={classes.modal__input} type="text" />*/}
                    </label>
                    <label className={classes.modal__tags}>
                        <span className={classes.modal__text}>Tags:</span>
                        <input name="title" className={classes.modal__input} type="text" placeholder='#tag' />
                    </label>
                    <button className={classes.modal__button} onClick={toggleIsOpen}>Create note</button>
                </div>
            </div>
            , document.body)
        : null
}


