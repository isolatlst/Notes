import classes from "../../styles/FormControl.module.scss";
import {Field} from "formik";
import React from "react";
import {validateTags, validateText, validateTitle} from "../../tools/validators";

type PropsType = {
    touched: boolean | undefined
    errors: string | undefined
    title: string
    autoFocus: boolean
    name: string
    placeholder: string
    validator: typeof validateTags | typeof validateText | typeof validateTitle
    fieldType: "input" | "textarea"
    handleChange: (e: React.SyntheticEvent<HTMLTextAreaElement, React.ChangeEvent & InputEvent>)=> void
}

export const FormControl: React.FC<PropsType> = ({touched, errors, handleChange,
                          name, placeholder, validator,title,autoFocus, fieldType}) => {
    return (
        <label className={`${classes.note__label} ${touched ? errors ? classes.error : classes.active : ''}`}>
            <span className={`${classes.note__title} ${touched && errors ? classes.titleError : ''}`}>
                  {touched && errors ? errors : title}
            </span>
        <Field className={classes.note__input} autoFocus={autoFocus}
               component={fieldType} name={name} placeholder={placeholder}
               validate={validator} onChange={handleChange}/>
        </label>
    )
}
