import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import Form, {FormPropsType} from "./Form";
import ScaleNote from "../ScaleNote";

type PropsType = {defaultEditMode: boolean}
export type ModalPropsType = ReturnType<typeof useModal> & FormPropsType & PropsType
type ModalType = (args: ModalPropsType) => React.ReactPortal | null


export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return {isOpen, toggle}
}

export const Modal: ModalType = ({isOpen, toggle, initialValues, defaultEditMode}) => {
    const [isNoteEdit, setIsNoteEdit] = useState(false)
    const toggleIsNoteEdit = () => setIsNoteEdit(!isNoteEdit)
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 27 && isOpen) {
            toggle();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, false);
        return () => {document.removeEventListener('keydown', onKeyDown, false)}
    }, [isOpen])

    return isOpen
        ? createPortal(
            isNoteEdit  || defaultEditMode?
                <Form toggle={toggle} initialValues={initialValues}/>
                : <ScaleNote {...initialValues} toggle={toggle} setIsNoteEdit={toggleIsNoteEdit}/>
            , document.body)
        : null
}