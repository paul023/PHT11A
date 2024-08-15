// script.js

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo');

    // Event listener for the "Add" button
    todoButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (todoInput.value.trim() === '') return; // Prevent adding empty tasks

        // Create a new to-do item
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('check-btn');
        todoDiv.appendChild(checkButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
        todoInput.value = ''; // Clear input field
    });

    // Event listener for actions on the list
    todoList.addEventListener('click', (event) => {
        const item = event.target;
        if (item.classList.contains('delete-btn')) {
            item.parentElement.remove();
        }
        if (item.classList.contains('check-btn')) {
            item.parentElement.classList.toggle('completed');
        }
    });

    // Filter tasks based on selection
    filterOption.addEventListener('change', (event) => {
        const todos = todoList.childNodes;
        todos.forEach((todo) => {
            switch (event.target.value) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        });
    });
});
