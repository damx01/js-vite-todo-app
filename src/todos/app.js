import html from './app.html?raw'
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list'
}


/**
 * 
 * @param {String} elementId id del elemntHTML al que agregar  
 */
export const app = (elementId) => {


    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos)
    }





    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append(app);
        displayTodos();
    })()

}