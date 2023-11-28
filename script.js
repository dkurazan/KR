const form = document.getElementById('loginForm');
const checkbox = document.getElementById('rememberMe');
const username = document.getElementById('username');
const userPassword = document.getElementById('password');

if (localStorage.userData) {
    const outputData = JSON.parse(localStorage.userData);
    username.value = JSON.parse(localStorage.userData).name;
    userPassword.value = JSON.parse(localStorage.userData).password;
    checkbox.checked = true;
}

const login = () => {
    const userData = {
        name: username.value,
        password: userPassword.value
    }

    document.getElementById('output').innerHTML = "You are logged in. Welcome";

    if (checkbox.checked) {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    else {
        localStorage.removeItem('userData', JSON.stringify(userData));
    }
    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    login();
})