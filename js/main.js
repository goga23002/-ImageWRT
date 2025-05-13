// Глобальные переменные
let currentSection = 'windows';
let selectedCard = null;

// Обновление времени
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString('ru-RU');
}

// Переключение между разделами
function showSection(sectionId) {
    // Скрываем все разделы
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Показываем выбранный раздел
    document.getElementById(sectionId + '-section').style.display = 'block';
    
    // Обновляем активный пункт меню
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Обновляем заголовок страницы
    const titles = {
        'windows': 'Образы Windows/Linux',
        'office': 'Установщики Office',
        'stats': 'Статистика',
        'settings': 'Настройки'
    };
    document.getElementById('page-title').textContent = titles[sectionId];
    
    currentSection = sectionId;
    
    // Если открыли статистику - обновляем данные
    if (sectionId === 'stats') {
        updateStats();
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Запускаем обновление времени
    updateTime();
    setInterval(updateTime, 1000);
    
    // Обработка нажатия Enter в поле пароля
    document.getElementById('password').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Добавляем запись о первом входе
    if (!localStorage.getItem('firstVisit')) {
        const now = new Date();
        localStorage.setItem('firstVisit', now.toLocaleString('ru-RU'));
    }
});