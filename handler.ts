import Todos from "./resources/todos";

export const todos = (event, context, cb) => { return new Todos(event, context, cb); };