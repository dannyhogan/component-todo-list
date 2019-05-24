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
    },
    remove(id) {
        const todos = todoApi.getAll();
        
        const updatedTodos = todos.filter(todo => {
            return todo.id !== id;
        });

        const todoData = JSON.stringify(updatedTodos);
        localStorage.setItem(todoApi.key, todoData);
    },  
    isEmpty() {
        const todos = localStorage.getItem(todoApi.key);
        if(!todos) {
            return true;
        }
        return false;
    },
    change(todoToChange) {
        const todos = todoApi.getAll();
        let todo = findById(todos, todoToChange);
        todo.completed = !todo.completed;
        const todoData = JSON.stringify(todos);
        localStorage.setItem(todoApi.key, todoData);
    }
};

export default todoApi;