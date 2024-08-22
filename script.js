document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoTitleInput = document.getElementById('todoTitle');
    const todoDescriptionInput = document.getElementById('todoDescription');
    const todoList = document.getElementById('todoList');

    addButton.addEventListener('click', addTask);
    todoList.addEventListener('click', handleTaskAction);

    function addTask() {
        const title = todoTitleInput.value.trim();
        const description = todoDescriptionInput.value.trim();

        if (title && description) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            
            const titleElement = document.createElement('div');
            titleElement.className = 'title';
            titleElement.textContent = title;

            const descriptionElement = document.createElement('div');
            descriptionElement.className = 'description';
            descriptionElement.textContent = description;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = '×';

            todoItem.appendChild(titleElement);
            todoItem.appendChild(descriptionElement);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);

            todoTitleInput.value = '';
            todoDescriptionInput.value = '';
        } else {
            alert('Please enter both title and description.');
        }
    }

    function handleTaskAction(event) {
        if (event.target.classList.contains('delete-button')) {
            const todoItem = event.target.closest('.todo-item');
            todoItem.remove();
        }

        if (event.target.classList.contains('todo-item')) {
            event.target.classList.toggle('completed');
        }
    }
});
