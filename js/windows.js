function loadWindowsCards() {
    const windowsGrid = document.createElement('div');
    windowsGrid.className = 'windows-grid';
    
    const windowsData = [
        {
            title: "Windows 11 +- Office",
            build: "22H2 (22621.1992)",
            desc: "Сборка Windows 11 с Office 2024",
            link: "https://rutracker.net/forum/viewtopic.php?t=6638704",
            details: `
                <h3>Windows 11 Pro 22H2 (22621.1992)</h3>
                <p>Полная версия Windows 11 Professional с последними обновлениями безопасности и исправлениями ошибок.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Обновленный интерфейс с закругленными углами и центрированным меню "Пуск"</li>
                    <li>Поддержка Android-приложений через Amazon Appstore</li>
                    <li>Улучшенная производительность игр с DirectStorage и Auto HDR</li>
                    <li>Новые возможности для работы с несколькими мониторами</li>
                    <li>Встроенный Microsoft Teams для быстрой связи</li>
                    <li>Обновленный Microsoft Store с поддержкой большего количества приложений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 1 ГГц или выше с 2 или более ядрами</li>
                    <li>ОЗУ: 4 ГБ и более</li>
                    <li>Место на диске: 64 ГБ и более</li>
                    <li>Видеокарта: совместимая с DirectX 12 или выше</li>
                    <li>TPM: версия 2.0</li>
                </ul>
            `
        },
        {
            title: "Windows 10 +- Office",
            build: "22H2 (19045.2965)",
            desc: "Сборка Windows 10 с Office 2024",
            link: "https://rutracker.net/forum/viewtopic.php?t=6637147",
            details: `
                <h3>Windows 10 Pro 22H2 (19045.2965)</h3>
                <p>Финальная версия Windows 10 с обновлениями безопасности и исправлениями ошибок.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Классический интерфейс с меню "Пуск" в привычном формате</li>
                    <li>Поддержка всех современных функций безопасности</li>
                    <li>Встроенный антивирус Windows Defender</li>
                    <li>Режим песочницы (Windows Sandbox) для безопасного запуска приложений</li>
                    <li>Поддержка виртуальных рабочих столов</li>
                    <li>Интеграция с облачными сервисами Microsoft</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 1 ГГц или выше</li>
                    <li>ОЗУ: 2 ГБ для 64-разрядной версии</li>
                    <li>Место на диске: 32 ГБ для 64-разрядной версии</li>
                    <li>Видеокарта: совместимая с DirectX 9 или выше</li>
                </ul>
            `
        },
        {
            title: "Ubuntu 22.04 LTS",
            build: "Jammy Jellyfish",
            desc: "Популярный Linux-дистрибутив с долгосрочной поддержкой",
            link: "https://ubuntu.com/download/desktop",
            details: `
                <h3>Ubuntu 22.04 LTS (Jammy Jellyfish)</h3>
                <p>Дистрибутив Linux с долгосрочной поддержкой (LTS) до 2027 года.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Ядро Linux 5.15 с улучшенной поддержкой оборудования</li>
                    <li>Рабочая среда GNOME 42 с темным режимом</li>
                    <li>Поддержка Wayland по умолчанию</li>
                    <li>Встроенный магазин приложений Snap</li>
                    <li>Улучшенная поддержка Raspberry Pi</li>
                    <li>Новые версии Python, OpenSSL и других ключевых пакетов</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 2 ГГц двухъядерный или лучше</li>
                    <li>ОЗУ: 4 ГБ</li>
                    <li>Место на диске: 25 ГБ</li>
                    <li>Видеокарта: с поддержкой разрешения 1024×768</li>
                </ul>
            `
        },
        {
            title: "Windows 11 ",
            build: "22H2 (22621.1992)",
            desc: "Оригинальный образ Windows 11 ",
            link: "https://www.microsoft.com/ru-ru/software-download/windows11",
            details: `
                <h3>Windows 11 Pro 22H2 (22621.1992)</h3>
                <p>Полная версия Windows 11 Professional с последними обновлениями безопасности и исправлениями ошибок.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Обновленный интерфейс с закругленными углами и центрированным меню "Пуск"</li>
                    <li>Поддержка Android-приложений через Amazon Appstore</li>
                    <li>Улучшенная производительность игр с DirectStorage и Auto HDR</li>
                    <li>Новые возможности для работы с несколькими мониторами</li>
                    <li>Встроенный Microsoft Teams для быстрой связи</li>
                    <li>Обновленный Microsoft Store с поддержкой большего количества приложений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 1 ГГц или выше с 2 или более ядрами</li>
                    <li>ОЗУ: 4 ГБ и более</li>
                    <li>Место на диске: 64 ГБ и более</li>
                    <li>Видеокарта: совместимая с DirectX 12 или выше</li>
                    <li>TPM: версия 2.0</li>
                </ul>
            `
        },
        {
            title: "Windows 10 ",
            build: "22H2 (22621.1992)",
            desc: "Оригинальный образ Windows 10 ",
            link: "https://www.microsoft.com/ru-ru/software-download/windows10",
            details: `
                <h3>Windows 11 Pro 22H2 (22621.1992)</h3>
                <p>Полная версия Windows 11 Professional с последними обновлениями безопасности и исправлениями ошибок.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Обновленный интерфейс с закругленными углами и центрированным меню "Пуск"</li>
                    <li>Поддержка Android-приложений через Amazon Appstore</li>
                    <li>Улучшенная производительность игр с DirectStorage и Auto HDR</li>
                    <li>Новые возможности для работы с несколькими мониторами</li>
                    <li>Встроенный Microsoft Teams для быстрой связи</li>
                    <li>Обновленный Microsoft Store с поддержкой большего количества приложений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 1 ГГц или выше с 2 или более ядрами</li>
                    <li>ОЗУ: 4 ГБ и более</li>
                    <li>Место на диске: 64 ГБ и более</li>
                    <li>Видеокарта: совместимая с DirectX 12 или выше</li>
                    <li>TPM: версия 2.0</li>
                </ul>
            `
        },
        {
            title: "Kali",
            build: "Kali Linux 2025.1c Changelog",
            desc: "Популярный Linux-дистрибутив с долгосрочной поддержкой",
            link: "https://www.kali.org/get-kali/#kali-platforms",
            details: `
                <h3>Kali</h3>
                <p>Полная версия Kali с последними обновлениями безопасности и исправлениями ошибок.</p>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Обновленный интерфейс с закругленными углами и центрированным меню "Пуск"</li>
                    <li>Поддержка Android-приложений через Amazon Appstore</li>
                    <li>Улучшенная производительность игр с DirectStorage и Auto HDR</li>
                    <li>Новые возможности для работы с несколькими мониторами</li>
                    <li>Встроенный Kali  Teams для быстрой связи</li>
                    <li>Обновленный Kali Store с поддержкой большего количества приложений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>Процессор: 1 ГГц или выше с 2 или более ядрами</li>
                    <li>ОЗУ: 4 ГБ и более</li>
                    <li>Место на диске: 64 ГБ и более</li>
                    <li>Видеокарта: совместимая с DirectX 12 или выше</li>
                    <li>TPM: версия 2.0</li>
                </ul>
            `
        }
    ];
    
    windowsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'windows-card';
        card.innerHTML = `
            <div class="windows-card-title">${item.title}</div>
            <div class="windows-card-build">Версия: ${item.build}</div>
            <div class="windows-card-desc">${item.desc}</div>
            <button class="details-btn" onclick="showDetails('${escapeHtml(item.title)}', '${escapeHtml(item.details)}')">Подробнее</button>
            <a href="${item.link}" class="download-btn" target="_blank">Скачать</a>
        `;
        windowsGrid.appendChild(card);
    });
    
    document.getElementById('windows-section').appendChild(windowsGrid);
}

function loadOfficeCards() {
    const officeGrid = document.createElement('div');
    officeGrid.className = 'windows-grid';
    
    const officeData = [
        {
            title: "Office 2013-2024 C2R Install + Lite",
            build: "Pro Plus VL 16.0.14332.20503",
            desc: "Полные версии Office 2013-2024 (Word, Excel, PowerPoint, Outlook)",
            link: "https://msfree.su/index.php?threads/498/page-48#post-26380",
            details: `
                <h3>Office 2013-2024 C2R Install + Lite</h3>
                <p>Последняя автономная версия офисного пакета Microsoft.</p>
                <h4>Включенные приложения:</h4>
                <ul class="modal-features">
                    <li>Word 2024 - текстовый редактор</li>
                    <li>Excel 2024 - табличный редактор</li>
                    <li>PowerPoint 2024 - создание презентаций</li>
                    <li>Outlook 2024 - почтовый клиент</li>
                    <li>Access 2024 - система управления базами данных</li>
                    <li>Publisher 2024 - издательская система</li>
                </ul>
                <h4>Новые возможности:</h4>
                <ul class="modal-features">
                    <li>Улучшенная совместная работа с реальным времени</li>
                    <li>Новые типы диаграмм в Excel</li>
                    <li>Обновленные анимации в PowerPoint</li>
                    <li>Темный режим для всех приложений</li>
                    <li>Улучшенная производительность</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>ОС: Windows 10 или новее</li>
                    <li>Процессор: 1.6 ГГц, 2 ядра</li>
                    <li>ОЗУ: 4 ГБ</li>
                    <li>Место на диске: 4 ГБ</li>
                </ul>
            `
        },
        {
            title: "KMSAuto++ Portable v1.8.7",
            build: "Pro Plus VL 16.0.10378.20029",
            desc: "Стабильная версия Office 2019 с обновлениями",
            link: "https://msfree.su/index.php?threads/710/",
            details: `
                <h3>Microsoft Office 2019 Pro Plus</h3>
                <p>Проверенная версия офисного пакета с долгосрочной поддержкой.</p>
                <h4>Включенные приложения:</h4>
                <ul class="modal-features">
                    <li>Word 2019</li>
                    <li>Excel 2019</li>
                    <li>PowerPoint 2019</li>
                    <li>Outlook 2019</li>
                    <li>Access 2019</li>
                    <li>Publisher 2019</li>
                </ul>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Новые формулы в Excel (CONCAT, TEXTJOIN, IFS)</li>
                    <li>Морфинг-переходы в PowerPoint</li>
                    <li>Режим "Чернила" в Word</li>
                    <li>Улучшенная интеграция с облачными сервисами</li>
                    <li>Поддержка SVG-изображений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>ОС: Windows 10</li>
                    <li>Процессор: 1.6 ГГц, 2 ядра</li>
                    <li>ОЗУ: 4 ГБ</li>
                    <li>Место на диске: 4 ГБ</li>
                </ul>
            `
        },
        {
            title: "KMS Tools Lite Portable",
            build: "Pro Plus VL 16.0.10378.20029",
            desc: "Стабильные версии Office 2013-2024 с обновлениями",
            link: "https://msfree.su/index.php?threads/681/page-8#post-51273",
            details: `
                <h3>Microsoft Office 2019 Pro Plus</h3>
                <p>Проверенная версия офисного пакета с долгосрочной поддержкой.</p>
                <h4>Включенные приложения:</h4>
                <ul class="modal-features">
                    <li>Word 2019</li>
                    <li>Excel 2019</li>
                    <li>PowerPoint 2019</li>
                    <li>Outlook 2019</li>
                    <li>Access 2019</li>
                    <li>Publisher 2019</li>
                </ul>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Новые формулы в Excel (CONCAT, TEXTJOIN, IFS)</li>
                    <li>Морфинг-переходы в PowerPoint</li>
                    <li>Режим "Чернила" в Word</li>
                    <li>Улучшенная интеграция с облачными сервисами</li>
                    <li>Поддержка SVG-изображений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>ОС: Windows 10</li>
                    <li>Процессор: 1.6 ГГц, 2 ядра</li>
                    <li>ОЗУ: 4 ГБ</li>
                    <li>Место на диске: 4 ГБ</li>
                </ul>
            `
        },
        {
            title: "PIDKey Lite Portable",
            build: "Pro Plus VL 16.0.10378.20029",
            desc: "Стабильные версии Office 2013-2024 с обновлениями",
            link: "https://msfree.su/index.php?threads/507/page-5#post-28022",
            details: `
                <h3>Microsoft Office 2019 Pro Plus</h3>
                <p>Проверенная версия офисного пакета с долгосрочной поддержкой.</p>
                <h4>Включенные приложения:</h4>
                <ul class="modal-features">
                    <li>Word 2019</li>
                    <li>Excel 2019</li>
                    <li>PowerPoint 2019</li>
                    <li>Outlook 2019</li>
                    <li>Access 2019</li>
                    <li>Publisher 2019</li>
                </ul>
                <h4>Основные особенности:</h4>
                <ul class="modal-features">
                    <li>Новые формулы в Excel (CONCAT, TEXTJOIN, IFS)</li>
                    <li>Морфинг-переходы в PowerPoint</li>
                    <li>Режим "Чернила" в Word</li>
                    <li>Улучшенная интеграция с облачными сервисами</li>
                    <li>Поддержка SVG-изображений</li>
                </ul>
                <h4>Системные требования:</h4>
                <ul class="modal-features">
                    <li>ОС: Windows 10</li>
                    <li>Процессор: 1.6 ГГц, 2 ядра</li>
                    <li>ОЗУ: 4 ГБ</li>
                    <li>Место на диске: 4 ГБ</li>
                </ul>
            `
        }
    ];
    
    officeData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'windows-card';
        card.innerHTML = `
            <div class="windows-card-title">${item.title}</div>
            <div class="windows-card-build">Версия: ${item.build}</div>
            <div class="windows-card-desc">${item.desc}</div>
            <button class="details-btn" onclick="showDetails('${escapeHtml(item.title)}', '${escapeHtml(item.details)}')">Подробнее</button>
            <a href="${item.link}" class="download-btn" target="_blank">Скачать</a>
        `;
        officeGrid.appendChild(card);
    });
    
    document.getElementById('office-section').appendChild(officeGrid);
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showDetails(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                <button class="download-btn" onclick="window.open('${getDownloadLink(title)}', '_blank')">Скачать</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function getDownloadLink(title) {
    // Здесь можно добавить логику для получения правильной ссылки на скачивание
    if (title.includes("Windows 11")) return "https://rutracker.net/forum/viewtopic.php?t=6638704";
    if (title.includes("Windows 10")) return "https://rutracker.net/forum/viewtopic.php?t=6637147";
    if (title.includes("Office 2021")) return "https://rutracker.net/forum/viewtopic.php?t=6638704";
    if (title.includes("Office 2019")) return "https://rutracker.net/forum/viewtopic.php?t=6637147";
    return "#";
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadWindowsCards();
    loadOfficeCards();
    
    // Добавляем кнопку "Подробнее" в CSS
    const style = document.createElement('style');
    style.textContent = `
        .details-btn {
            display: inline-block;
            margin-top: 15px;
            padding: 8px 15px;
            background-color: #6c757d;
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-size: 14px;
            cursor: pointer;
            transition: var(--transition);
            margin-right: 10px;
        }
        
        .details-btn:hover {
            background-color: #5a6268;
            transform: translateY(-2px);
            box-shadow: 0 3px 10px rgba(108, 117, 125, 0.3);
        }
    `;
    document.head.appendChild(style);
});