import findById from './find-by-id.js';

const todoApi = {
    key: 'todo',
    save(todo) {
        let todos = todoApi.getAll();
        todos.unshift(todo);
        const todoData = JSON.stringify(todos);
        localStorage.setItem(todoApi.key, todoData);
    },
    get(id) {
        const todos = todoApi.getAll();
        return findById(todos, id);
    },
    getAll() {
        const todoData = localStorage.getItem(todoApi.key);
        let todos = JSON.parse(todoData);
        if(!todos) {
            todos = [];
        }
        return todos;
    }
};

export default todoApi;