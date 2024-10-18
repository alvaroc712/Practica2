document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = this.login.value;
    const password = this.password.value;
    const recordar = this.Recordar.checked;

    if (login === 'alvaro' && password === '123') {
        window.location.href = '../Main/principal.html';

    } else {
        alert('Usuario o contraseña incorrectos');
    }
});