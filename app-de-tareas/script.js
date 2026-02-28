// 1. Selección de elementos del DOM (Variables)
const input = document.getElementById('taskInput');
const btnAdd = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const counterDisplay = document.getElementById('counter');

let taskCount = 0; // Variable de estado

// 2. Función para actualizar el contador
function updateCounter(value) {
    taskCount += value;
    counterDisplay.innerText = taskCount;
}

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
    `;

    // --- NUEVA FUNCIONALIDAD: Marcar como completada ---
    const textSpan = li.querySelector('span');
    textSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    // ---------------------------------------------------

    // Evento para eliminar (se mantiene igual)
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
        updateCounter(-1);
    });

    list.appendChild(li);
    input.value = "";
    updateCounter(1);
}

// 4. Eventos (Interacción)
btnAdd.addEventListener('click', addTask);

// Permitir agregar con la tecla Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});