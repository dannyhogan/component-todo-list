import filterTodos from '../src/filter-todos.js';
const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        task: 'Learn HTML',
        completed: true
    },
    {
        task: 'Learn CSS',
        completed: false
    },
];

test('return todos with tasks that include filter', assert => {
    //arrange
    const filter = {
        task: 'ht',
        radio: ''
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, [todos[0]]);
});

test('return all todos if no filter', assert => {
    //arrange
    const filter = {
        task: '',
        radio: ''
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, todos);
});

test('return all todos if all radio button is checked', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'all'
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, todos);
});

test('return completed todos if completed radio button is checked', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'true'
    };

    //act
    const result = filterTodos(todos, filter);
    //assert
    assert.deepEqual(result, [todos[0]]);
});

test('return incomplete todos if incomplete radio button is checked', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'false'
    };

    //act
    const result = filterTodos(todos, filter);
    //assert
    assert.deepEqual(result, [todos[1]]);
});