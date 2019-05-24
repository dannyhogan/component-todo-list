import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import ColorPicker from './ColorPicker.js';
import todoData from '../../data/todo-data.js';
import filterByTask from '../filter-todos.js';
import todoApi from '../services/todo-api.js';
import setColor from '../services/set-color.js';    

class App extends Component {
    
    render() {
        const dom = this.renderDOM();
        const app = document.getElementById('app');

        if(todoApi.isEmpty()) {
            todoData.forEach(todo => {
                if(!todoApi.get(todo.id)) {
                    todoApi.save(todo);
                }
            });
        }

        setColor(app);
        
        const header = new Header();

        const colorPicker = new ColorPicker({
            changeColor: () => {
                const colorData = localStorage.getItem('color');
                const color = JSON.parse(colorData);
                app.style.background = color;
            }
        });

        const todos = todoApi.getAll();

        const addTodo = new AddTodo({
            addTodo: newTodo => {
                todoApi.save(newTodo);
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

        const todoList = new TodoList({ 
            todos,
            onRemove: todoToRemove => {
                todoApi.remove(todoToRemove);
                todoList.update({ todos: todoApi.getAll() });
                filter.update({ todos });
            }
        });

        const main = dom.querySelector('main');

        main.appendChild(header.render());
        main.appendChild(colorPicker.render());
        main.appendChild(addTodo.render());
        main.appendChild(filter.render());
        main.appendChild(todoList.render());

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