import Component from './Component.js';

class TodoItem extends Component {

    render() {}

    renderTemplate() {
        return /*html*/`
        <li>
            <label>Todo
                <input type="checkbox">
            </label>
        </li>
        `;
    }
}

export default TodoItem;