
const password = prompt('Введите пароль:');

function validatePassword(password) {
    if (password === null || password.length < 3 || password.length > 20) {
        return false;
    }
    let hasUppercase = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        if (char >= '0' && char <= '9') {
            hasDigit = true;
        }
    }
    return hasUppercase && hasDigit;
}

if (validatePassword(password)) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!');
} else {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
}