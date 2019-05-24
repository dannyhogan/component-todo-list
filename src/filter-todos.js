function filterTodos(todos, filter) {

    const lowerCaseTaskFilter = filter.task.toLowerCase();

    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasFilteredText = lowerCaseTask.includes(lowerCaseTaskFilter);

        const stringStatus = todo.completed.toString();
        let hasFilteredStatus = stringStatus.includes(filter.radio);

        if(filter.radio === 'all') {
            hasFilteredStatus = true;
        }

        return hasFilteredText && hasFilteredStatus;
    });
}

export default filterTodos;