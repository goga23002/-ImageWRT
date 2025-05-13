// Глобальная переменная для лога активности
let activityLog = JSON.parse(localStorage.getItem('activityLog')) || [];

// Обновление статистики
function updateStats() {
    // Увеличиваем счетчик посещений
    let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    
    // Сохраняем время последнего посещения
    const now = new Date();
    const lastVisit = now.toLocaleString('ru-RU');
    localStorage.setItem('lastVisit', lastVisit);
    
    // Добавляем запись в лог
    activityLog.unshift({
        action: 'Вход в систему',
        timestamp: lastVisit
    });
    localStorage.setItem('activityLog', JSON.stringify(activityLog));
    
    // Обновляем UI
    document.getElementById('stats-section').innerHTML = `
        <div class="stats-grid">
            <div class="stats-card">
                <div class="stats-card-title">Всего посещений</div>
                <div class="stats-card-value" id="total-visits">${visitCount}</div>
            </div>
            <div class="stats-card">
                <div class="stats-card-title">Последнее посещение</div>
                <div class="stats-card-value" id="last-visit">${lastVisit}</div>
            </div>
            <div class="stats-card">
                <div class="stats-card-title">Всего образов</div>
                <div class="stats-card-value">${getTotalImagesCount()}</div>
            </div>
        </div>
        
        <div class="activity-log">
            <h3>Журнал активности</h3>
            <div id="activity-log">
                ${renderActivityLog()}
            </div>
        </div>
    `;
}

function getTotalImagesCount() {
    // Здесь можно добавить логику подсчета образов
    return "6";
}

function renderActivityLog() {
    if (activityLog.length === 0) {
        return '<div class="no-data">Нет данных о входах</div>';
    }
    
    let logHTML = '';
    activityLog.slice(0, 10).forEach(entry => {
        logHTML += `
        <div class="log-entry">
            <div class="log-action">${entry.action}</div>
            <div class="log-time">${entry.timestamp}</div>
        </div>
        `;
    });
    
    return logHTML;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
});