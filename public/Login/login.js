document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = this.user.value;
    const password = this.password.value;

    if (user === 'alvaro' && password === '123') {
        window.location.href = '../Main/principal.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});