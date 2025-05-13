// Загрузка настроек
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('appSettings')) || {};
    
    // Создаем форму настроек
    document.getElementById('settings-section').innerHTML = `
        <div class="settings-form">
            <h2>Настройки интерфейса</h2>
            
            <div class="form-group">
                <label class="form-label">Тема интерфейса</label>
                <select class="form-control" id="theme-select">
                    <option value="light">Светлая</option>
                    <option value="dark">Темная</option>
                    <option value="system">Как в системе</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">Размер шрифта</label>
                <select class="form-control" id="font-size">
                    <option value="14px">Маленький</option>
                    <option value="16px">Средний</option>
                    <option value="18px">Большой</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">Стиль кнопок</label>
                <select class="form-control" id="button-style">
                    <option value="rounded">Закругленные</option>
                    <option value="square">Прямоугольные</option>
                    <option value="pill">Капсульные</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">Анимации</label>
                <div style="display: flex; align-items: center;">
                    <input type="checkbox" id="animations-enabled" checked style="margin-right: 10px;">
                    <label for="animations-enabled">Включить анимации</label>
                </div>
            </div>
            
            <div class="form-actions">
                <button class="save-btn" onclick="saveSettings()">Сохранить настройки</button>
                <button class="reset-btn" onclick="resetSettings()">Сбросить настройки</button>
            </div>
        </div>
    `;
    
    // Применяем сохраненные настройки
    if (savedSettings.theme) {
        document.getElementById('theme-select').value = savedSettings.theme;
    }
    if (savedSettings.fontSize) {
        document.getElementById('font-size').value = savedSettings.fontSize;
    }
    if (savedSettings.buttonStyle) {
        document.getElementById('button-style').value = savedSettings.buttonStyle;
    }
    if (savedSettings.animations !== undefined) {
        document.getElementById('animations-enabled').checked = savedSettings.animations;
    }
    
    applySettings(savedSettings);
}

// Сохранение настроек
function saveSettings() {
    const settings = {
        theme: document.getElementById('theme-select').value,
        fontSize: document.getElementById('font-size').value,
        buttonStyle: document.getElementById('button-style').value,
        animations: document.getElementById('animations-enabled').checked
    };
    
    localStorage.setItem('appSettings', JSON.stringify(settings));
    applySettings(settings);
    
    // Добавляем запись в лог
    const now = new Date();
    activityLog.unshift({
        action: 'Изменены настройки системы',
        timestamp: now.toLocaleString('ru-RU')
    });
    localStorage.setItem('activityLog', JSON.stringify(activityLog));
    
    // Показываем уведомление
    showNotification('Настройки успешно сохранены!', 'success');
}

// Применение настроек
function applySettings(settings) {
    // Тема
    document.body.className = '';
    document.body.classList.add(settings.theme + '-theme');
    
    // Размер шрифта
    document.body.style.fontSize = settings.fontSize;
    
    // Стиль кнопок
    const buttons = document.querySelectorAll('button, .download-btn, .menu-item');
    buttons.forEach(btn => {
        btn.classList.remove('rounded', 'square', 'pill');
        btn.classList.add(settings.buttonStyle);
    });
    
    // Анимации
    document.body.style.animationPlayState = settings.animations ? 'running' : 'paused';
}

// Сброс настроек
function resetSettings() {
    if (confirm('Вы уверены, что хотите сбросить все настройки?')) {
        localStorage.removeItem('appSettings');
        loadSettings();
        showNotification('Настройки сброшены к значениям по умолчанию!', 'success');
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Добавляем стили для уведомлений
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: var(--border-radius);
            color: white;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
        
        .notification.success {
            background-color: var(--success-color);
        }
        
        .notification.error {
            background-color: var(--danger-color);
        }
    `;
    document.head.appendChild(style);
    
    loadSettings();
});