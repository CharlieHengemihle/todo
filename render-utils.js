export function renderTodo(todo) {
    const li = document.createElement('li');
    if (todo.complete) {
        li.classList.add('complete');
    }

    const p = document.createElement('p');
    p.textContent = todo.description;
    li.append(p);

    return li;
}
