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
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, [todos[0]]);
});

test('return empty filter array if no filter', assert => {
    //arrange
    const filter = {
        task: ''
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, []);
});

function filterTodos(todos, filter) {
    const lowerCaseTaskFilter = filter.task.toLowerCase();
    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasFilteredText = !lowerCaseTaskFilter || lowerCaseTask.includes(lowerCaseTaskFilter);

        return hasFilteredText;
    });
}