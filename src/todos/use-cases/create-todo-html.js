import { Todo } from "../models/todo.model"
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {

    if (!todo) throw new Error("Es necesario el todo");

    const html = `<h1>${todo.description}</h1>`

    const liElement = document.createElement('li')
    liElement.innerHTML = html

    return liElement;

}