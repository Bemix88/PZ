console.log("#3");

const ADMIN_PASSWORD = '111';

let userPassword = prompt('Будь ласка, введіть пароль:');

let message;

if (userPassword === null) {
    message = 'Скасовано користувачем!';
}
else if (userPassword === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!';
}
else {
    message = 'Доступ заборонений, невірний пароль!';
}

alert(message);