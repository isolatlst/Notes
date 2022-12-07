import classes from "../styles/Form.module.scss";
import {Field} from "formik";
import React from "react";


type PropsType = {
    index: number
    removeFunc: (id: number) => void
}


const Tag: React.FC<PropsType> = ({index,removeFunc}) => {
    return (
        <span className={classes.tag__item}>
                    <Field name={`tags.${index}`} className={classes.tag__text} as="input"/>
                    <button type="button" className={classes.tag__deleteItem}
                            onClick={() => removeFunc(index)}>x</button>
        </span>
    )
}

export default Tag