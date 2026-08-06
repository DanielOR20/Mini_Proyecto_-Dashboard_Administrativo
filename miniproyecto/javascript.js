// Base de usuarios predeterminados
const defaultUsers = [
    { email: "admin@tech.cr", pass: "12345", nombre: "Andrés (Admin)", role: "Administrador" },
    { email: "operador@tech.cr", pass: "12345", nombre: "Usuario Operador", role: "Operador" }
];

// Evento de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('loginError');

    const user = defaultUsers.find(u => u.email === email && u.pass === pass);

    if (user) {
        localStorage.setItem('activeSession', JSON.stringify({
            nombre: user.nombre,
            email: user.email,
            role: user.role,
            loginTime: new Date().toLocaleString()
        }));
        window.location.href = 'dashboard.html';
    } else {
        errorElement.innerText = "Credenciales inválidas. Verifique correo y contraseña.";
    }
});

// Guard de protección de navegación
function checkSession() {
    const session = localStorage.getItem('activeSession');
    if (!session) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(session);
}

// Cierre de sesión
function logout() {
    localStorage.removeItem('activeSession');
    window.location.href = 'index.html';
}
