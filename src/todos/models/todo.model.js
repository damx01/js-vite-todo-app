import { v4 as uuidv4 } from 'uuid'; //para asignar id unicos
export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor(description) {

        this.id = uuidv4();//para asignar id unicos
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }

}