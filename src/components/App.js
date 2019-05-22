import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import todos from '../../data/todo-data.js';

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
                todoList.update({ todos })
            }
        });

        const todoListDOM = todoList.render();

        const addTodo = new AddTodo({
            addTodo: newTodo => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }
        });
        
        const addTodoDOM = addTodo.render();
        const main = dom.querySelector('main');

        main.appendChild(headerDOM);
        main.appendChild(addTodoDOM);
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