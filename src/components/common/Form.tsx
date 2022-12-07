import {FieldArray, Form as FormikForm, Formik} from "formik";
import classes from "../../styles/Form.module.scss";
import modalClasses from "../../styles/Modal.module.scss"
import {FormControl} from "./FormControl";
import {validateTags, validateText, validateTitle} from "../../tools/validators";
import React, {useMemo, useState} from "react";
import {notesACsSaga, NoteType} from "../../store/notes-action-creator";
import {useDispatch} from "react-redux";
import Tag from "../Tag";

export type FormPropsType = {
    toggle: () => void
    initialValues: FormInitialValueType
}
type FormInitialValueType = {
    id: number
    title: string
    text: string
    tags: Array<string>
    tag: string
}


const Form = ({toggle, initialValues}: FormPropsType) => {
    const dispatch = useDispatch()

    const [tagInText, setTag] = useState<string>('')
    const isTag = useMemo(() => !!tagInText, [tagInText])

    const handleSubmit = (note: NoteType , tag: string | undefined) => {
        const noteCopy = { id: note.id, title: note.title, text: note.text, tags: [...note.tags]}
        if (!!tag) noteCopy.tags.push(tag)
        if (!note.id) {
            noteCopy.id = Math.ceil(Math.random() * 10000)
            dispatch(notesACsSaga.createNote(noteCopy))
        } else {
            dispatch(notesACsSaga.putNote(noteCopy))
        }
        toggle()
    }
    const handleReset = (id:number) => dispatch(notesACsSaga.deleteNote(id))

    const handleTagInText = (e: React.SyntheticEvent<HTMLTextAreaElement, React.ChangeEvent & InputEvent>) =>{
        if(e.nativeEvent.data === '#'){
            setTag('#')
        }
        if(isTag){
            if(!/[\s.,;:]/gm.test(e.nativeEvent.data!)) {
                !!e.nativeEvent.data
                    ? setTag(tagInText+e.nativeEvent.data)
                    : setTag(tagInText.slice(0,-1))
            } else{
                setTag('')
                return true
            }
        }
        return false
    }


    return (
        <Formik initialValues={initialValues} onSubmit={note => {
            handleSubmit({...note}, note.tag)
        }} onReset={note => handleReset(note.id)}>
            {
                ({touched, errors, values, handleSubmit, handleChange}) => (
                    <FormikForm className={modalClasses.modal} onClick={toggle} onSubmit={handleSubmit}>
                        <div className={modalClasses.modal__body} onClick={(e) => e.stopPropagation()}>
                            <div className={modalClasses.modal__header}>Create New Note</div>

                            <FormControl touched={touched.title} errors={errors.title} title='Title:' placeholder='Title'
                                         autoFocus={true} name='title' validator={validateTitle} fieldType="input" handleChange={handleChange}/>

                            <FormControl touched={touched.text} errors={errors.text} title='Text:' placeholder='Type something'
                                         autoFocus={false} name='text' validator={validateText} fieldType="textarea" handleChange={(e)=> {
                                handleChange(e); const isNeedToPush = handleTagInText(e);
                                if (isNeedToPush && tagInText) values.tags.push(tagInText)
                            }}/>

                            <FieldArray name='tags' children={(arrayHelpers) => (
                                <div className={classes.tag}>
                                    <FormControl touched={touched.tag && !!values.tag} errors={errors.tag} title='Tags:' autoFocus={false} handleChange={handleChange}
                                                 name='tag' placeholder='#tag' validator={(value: string) => validateTags(value, values.tags)} fieldType="input"/>
                                    <button className={classes.tag__addItem} type="button" disabled={!values.tag || !!errors.tag}
                                            onClick={() => {
                                                arrayHelpers.push(arrayHelpers.form.values.tag.trim());
                                                arrayHelpers.form.values.tag = ''
                                            }}>Add tag
                                    </button>

                                    <div className={classes.tag__items}>
                                        {arrayHelpers.form.values.tags && arrayHelpers.form.values.tags.length > 0
                                            ? arrayHelpers.form.values.tags.map((tag: string, index: number) => (
                                                    <Tag key={index} index={index} removeFunc={arrayHelpers.remove}/>
                                                )
                                            )
                                            : ''}
                                    </div>
                                </div>
                            )}/>
                            <div className={modalClasses.modal__buttons}>
                                <button className={modalClasses.modal__button} type="submit">Add note</button>
                                {initialValues.id &&
                                    <button className={`${modalClasses.modal__button} ${modalClasses.modal__button_delete}`}
                                            type="reset">Delete note</button>}
                            </div>
                        </div>
                    </FormikForm>
                )
            }
        </Formik>
    );
}

export default Form