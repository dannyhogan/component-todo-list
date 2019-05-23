import Component from './Component.js';
import todoApi from '../services/todo-api.js';

class AddTodo extends Component {
    render() {
        const form = this.renderDOM();
        const addTodo = this.props.addTodo;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);
            const newTodo = {
                id: formData.get('task') + Date.now(),
                task: formData.get('task'),
                completed: false
            };
            
            addTodo(newTodo);
            
            form.reset();
            document.activeElement.blur();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
        <form id="add">
                <input type="text" name="task" placeholder="Add a todo!" required>
                <button>Submit</button>
        </form>
        `;
    }
}

export default AddTodo;