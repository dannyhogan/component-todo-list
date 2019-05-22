import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

QUnit.module('todo item');

test('returns correct dom from renderTemplate', assert => {
    //arrange
    const todo = {
        task: 'Learn HTML',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <label>Learn HTML
                <input type="checkbox" checked>
            </label>
        </li>
    `;

    //act
    const todoItem = new TodoItem({ todo });
    const todoItemDOM = todoItem.renderTemplate();

    //assert
    assert.htmlEqual(todoItemDOM, expected);
});