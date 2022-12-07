import {applyMiddleware, combineReducers, createStore} from "redux";
import notesReducer from "./notes-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import {notesWatcher} from "../saga/notesSaga";


const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    notes: notesReducer,
})

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(notesWatcher)



type AppStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
