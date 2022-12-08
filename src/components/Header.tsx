import logo from '../logo.svg'
import classes from '../styles/Header.module.scss'
import {Modal, ModalPropsType} from "./common/Modal";
import React, {useEffect, useState} from "react";
import {notesACsSaga} from "../store/notes-action-creator";
import {useDispatch} from "react-redux";


const Header = ({isOpen, toggle, initialValues, defaultEditMode}: ModalPropsType) => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const Debounce = window.setTimeout(() => {
                dispatch(notesACsSaga.searchNote(searchText))
            }, 300);
        return () => clearTimeout(Debounce);
    }, [searchText]);

    return (
        <header className={classes.header}>
            <div className={`${classes.header__logo} ${classes.header__logo_spin}`}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.header__title}>
                Notes
            </div>
            <div className={classes.header__addNote}>
                <Modal isOpen={isOpen} toggle={toggle} initialValues={initialValues} defaultEditMode={defaultEditMode} />
                <button onClick={toggle}>New note</button>
            </div>
            <div className={classes.header__searchNote}>
                <input type="text" placeholder='search' value={searchText} onChange={e => setSearchText(e.target.value)}/>
            </div>
        </header>
    );
}


export default Header;