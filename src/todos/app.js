import html from './app.html?raw'

/**
 * 
 * @param {String} elementId 
 */
export const app = (elementId) => {

    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append(app);

    })()



}