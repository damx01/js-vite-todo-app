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

const getTodos = (filter = Filters.All) => {

    switch (filter) {

        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Opción ${filter} no es valida.`);
    }
}

const addTodo = (description) => {

    if (!description) throw new Error("La Descripcion es obligatoria.");

    state.todos.push(new Todo(description))

}

const toggleTodo = (todoId) => {
    throw new Error("No Implementado")
}

const deleteTodo = (todoId) => {

    if (!todoId) throw new Error("Es necesario el Id")

    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)
}

const setFilter = (newFilter = Filters.All) => {

    state.filter = newFilter;

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
    getTodos,
}