import classes from '../styles/Note.module.scss'
import React from "react";

type PropsType = {
    text?: string
}

const Note: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.note}>
            <div className={classes.note__title}>
                Some title zxczxc
            </div>
            <div className={classes.note__body}>
                <div className={classes.note__text}>
                    {
                        props.text
                    }
                </div>
                <div className={classes.note__tags}></div>
            </div>
        </div>
    );
}


export default Note;