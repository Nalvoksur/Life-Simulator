// script.js
let energy = 100;
let name = "Персонаж";

// Загрузка данных из localStorage
function loadGame() {
    const savedEnergy = localStorage.getItem('energy');
    const savedName = localStorage.getItem('name');

    if (savedEnergy !== null) {
        energy = parseInt(savedEnergy);
    }
    if (savedName !== null) {
        name = savedName;
    }

    updateStatus();
}

// Сохранение данных в localStorage
function saveGame() {
    localStorage.setItem('energy', energy);
    localStorage.setItem('name', name);
}

// Обновление статуса на экране
function updateStatus() {
    document.getElementById('energy').innerText = energy;
    document.getElementById('name').innerText = name;
}

// Логирование действий
function logAction(message) {
    const log = document.getElementById('log');
    log.innerHTML += `<p>${message}</p>`;
}

// Обработчик кнопки "Работать"
document.getElementById('work-button').addEventListener('click', () => {
    if (energy >= 10) {
        energy -= 10;
        logAction('Персонаж поработал.');
    } else {
        logAction('Недостаточно энергии для работы.');
    }
    updateStatus();
    saveGame(); // Сохраняем прогресс
});

// Обработчик кнопки "Отдохнуть"
document.getElementById('rest-button').addEventListener('click', () => {
    energy += 20;
    if (energy > 100) energy = 100; // Максимум 100
    logAction('Персонаж отдохнул.');
    updateStatus();
    saveGame(); // Сохраняем прогресс
});

// Инициализация игры
loadGame();
