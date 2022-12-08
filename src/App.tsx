import React from "react";
import classes from './styles/App.module.scss'
import Header from "./components/Header";
import Notes from "./components/Notes";
import {useModal} from "./components/common/Modal";


const App = () => {
    const {isOpen, toggle} = useModal()

    return (
        <div className={classes.app}>
            <Header isOpen={isOpen} defaultEditMode={true} toggle={toggle} initialValues={{
                id: 0, title: "", text: "", tags: [] as Array<string>, tag: ""
            }}/>
            <Notes/>
        </div>
    )
}

export default App;
