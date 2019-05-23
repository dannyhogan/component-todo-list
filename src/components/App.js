import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import todos from '../../data/todo-data.js';
import filterByTask from '../filter-by-task.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const todoList = new TodoList({ 
            todos,
            onRemove: todoToRemove => {
                const index = todos.indexOf(todoToRemove);

                todos.splice(index, 1);
                todoList.update({ todos });
            }
        });

        const todoListDOM = todoList.render();

        const addTodo = new AddTodo({
            addTodo: newTodo => {
                todos.unshift(newTodo);
                todoList.update({ todos });
                filter.update();
            }
        });

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterByTask(todos, filter);
                todoList.update({ todos: filtered });
            }
        });
        const filterDOM = filter.render();

        const addTodoDOM = addTodo.render();
        const main = dom.querySelector('main');

        main.appendChild(headerDOM);
        main.appendChild(addTodoDOM);
        main.appendChild(filterDOM);
        main.appendChild(todoListDOM);

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;