import React from "react";
import classes from './styles/App.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Notes from "./components/Notes";


const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={classes.app}>
                <Header />
                <Routes>
                    <Route path='/' element={<Notes />} />
                    {/*<Route path='/' element={<Navigate to={`/f${(+new Date()).toString(16)}`}/>}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
