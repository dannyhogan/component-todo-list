import Component from './Component.js';

class ToDoList extends Component {
    
    renderTemplate() {
        return /*html*/`
        <ul>${this.props.todos.length}</ul>
    `;
    }
}

export default ToDoList;