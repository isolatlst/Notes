import React from "react";
import "../styles/Modal.module.scss";
import {createPortal} from "react-dom";

type PropsType = {
    isModalOpen: boolean
    toggleModal: () => void
}
type ModalType = (params: PropsType) => React.ReactPortal | null

const Modal: ModalType = ({isModalOpen, toggleModal}) => {
    return isModalOpen
        ? createPortal(
            <div className='modal'>
                <div className='modal__body'>
                    <label>
                        <span className='modal__text'>Write your name:</span>
                        <input autoFocus={true} className='modal__input' type="text" />
                    </label>
                    <button className='modal__button' onClick={toggleModal}>Enter</button>
                </div>
            </div>
            , document.body)
        : null
}

export default Modal
