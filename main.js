import './style.css'
import { app } from './src/todos/app'
import initStore from "./src/store/todo.store"



initStore.initStore()

app('#app')//manda el id del div que esta en index.html
