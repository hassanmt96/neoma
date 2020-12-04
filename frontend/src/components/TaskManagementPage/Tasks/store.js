import { createStore, applyMiddleware } from 'redux'
import {notesReducer} from './notesReducer'
import thunk from 'redux-thunk'
import { taskReducer } from '../taskreducer'

export const store = createStore(taskReducer, applyMiddleware(thunk))