import {todoTypes} from './types'

export const changeDescription = description => ({
    type: todoTypes.DESCRIPTION_CHANGED,
    payload: description
})

export const addTask = task => ({
    type: todoTypes.ADD_TASK,
    payload: task
})

export const doneTask = id => ({
    type: todoTypes.DONE_TASK,
    payload: id
})

export const removeTask = id => ({
    type: todoTypes.REMOVE_TASK,
    payload: id
})

export const searchTask = task => ({
    type: todoTypes.SEARCH_TASK,
    payload: task
})