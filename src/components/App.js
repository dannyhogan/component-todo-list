import Component from './Component.js';
import TodoList from './TodoList.js';
import todos from '../../data/todo-data.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const todoList = new TodoList({ todos });
        const todoListDOM = todoList.render();

        const main = dom.querySelector('main');
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