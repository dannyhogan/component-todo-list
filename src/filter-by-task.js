function filterTodosByTask(todos, filter) {
    const lowerCaseTaskFilter = filter.task.toLowerCase();
    return todos.filter(todo => {
        const lowerCaseTask = todo.task.toLowerCase();
        const hasFilteredText = lowerCaseTask.includes(lowerCaseTaskFilter);

        return hasFilteredText;
    });
}

export default filterTodosByTask;