import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

QUnit.module('todo item');

test('returns completed TodoItem dom', assert => {
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
            <button id="delete">ⓧ</button>
        </li>
    `;

    //act
    const todoItem = new TodoItem({ todo });
    const todoItemDOM = todoItem.renderTemplate();

    //assert
    assert.htmlEqual(todoItemDOM, expected);
});

test('returns uncompleted TodoItem dom', assert => {
    //arrange
    const todo = {
        task: 'Learn HTML',
        completed: false
    };

    const expected = /*html*/`
        <li>
            <label>Learn HTML
                <input type="checkbox" >
            </label>
            <button id="delete">ⓧ</button>
        </li>
    `;

    //act
    const todoItem = new TodoItem({ todo });
    const todoItemDOM = todoItem.renderTemplate();

    //assert
    assert.htmlEqual(todoItemDOM, expected);
});