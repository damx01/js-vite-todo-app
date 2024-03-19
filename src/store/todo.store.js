import { Todo } from "../todos/models/todo.model";



const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}


const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filters.All
}


const initStore = () => {

    console.log("InitStore 🥑")
    console.log(state);

}

const loadStore = () => {
    throw new Error("No Implementado")
}

/**
 * 
 * @param {String} description Descripción de la tarea
 */
const addTodo = (description) => {
    throw new Error("No Implementado")
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error("No Implementado")
}

/**
 * 
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    throw new Error("No Implementado")
}

const deleteCompleted = () => {
    throw new Error("No Implementado")
}


/**
 * 
 * @param {Array} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    throw new Error("No Implementado")
}


const getCurrentFilter = () => {
    throw new Error("No Implementado")
}



export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}