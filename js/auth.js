// Проверка пароля
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    const welcomeElement = document.getElementById('welcome-message');
    
    if (password === "20102010") {
        // Анимация успешного входа
        document.getElementById('login-screen').classList.add('success-animation');
        welcomeElement.textContent = "Добро пожаловать!";
        welcomeElement.style.opacity = "1";
        
        setTimeout(() => {
            document.getElementById('login-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('app').style.display = 'flex';
                updateTime();
                setInterval(updateTime, 1000);
            }, 500);
        }, 1500);
    } else {
        errorElement.textContent = "Неверный пароль!";
        document.getElementById('password').classList.add('shake');
        setTimeout(() => {
            document.getElementById('password').classList.remove('shake');
        }, 500);
    }
}

// Выход из системы
function logout() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('login-screen').style.opacity = '1';
        document.getElementById('password').value = '';
    }, 50);
}