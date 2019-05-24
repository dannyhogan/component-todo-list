function initializeTodos(todoApi, todoData) {
    if(todoApi.isEmpty()) {
        todoData.forEach(todo => {
            if(!todoApi.get(todo.id)) {
                todoApi.save(todo);
            }
        });
    }
}
export default initializeTodos;