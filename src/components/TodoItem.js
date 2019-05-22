import Component from './Component.js';

class TodoItem extends Component {

    render() {
        const item = this.renderDOM();

        return item;
    }

    renderTemplate() {

        let checked = '';

        if(this.props.todo.completed) {
            checked = 'checked';
        }

        return /*html*/`
        <li>
            <label>${this.props.todo.task}
                <input type="checkbox" ${checked}>
            </label>
            <button id="delete">ⓧ</button>
        </li>
        `;
    }
}

export default TodoItem;