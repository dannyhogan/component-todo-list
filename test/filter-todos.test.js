import filterTodosByTask from '../src/filter-by-task.js';
const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        task: 'Learn HTML',
        completed: true
    },
    {
        task: 'Learn CSS',
        completed: true
    },
    {
        task: 'Learn Javascript',
        completed: true
    }
];

test('return todos with tasks that include filter', assert => {
    //arrange
    const filter = {
        task: 'ht'
    };

    //act
    const expected = filterTodosByTask(todos, filter);
    //assert
    assert.deepEqual(expected, [todos[0]]);
});

test('return empty filter array if no filter', assert => {
    //arrange
    const filter = {
        task: ''
    };

    //act
    const expected = filterTodosByTask(todos, filter);
    //assert
    assert.deepEqual(expected, []);
});