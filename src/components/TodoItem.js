import Component from './Component.js';

class TodoItem extends Component {

    render() {
        const item = this.renderDOM();
        const removeButton = item.querySelector('button');
        const checkbox = item.querySelector('input');

        const todo = this.props.todo;
        const onRemove = this.props.onRemove;
        const onChange = this.props.onChange;

        removeButton.addEventListener('click', () => {
            onRemove(todo.id);
        });

        checkbox.addEventListener('click', () => {
            onChange(todo.id);
        });

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