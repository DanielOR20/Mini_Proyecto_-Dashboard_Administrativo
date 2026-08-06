// Usuarios precargados
const defaultUsers = [
    {
        email: "admin@tech.cr",
        pass: "12345",
        nombre: "Andrés (Admin)",
        role: "Administrador"
    },
    {
        email: "operador@tech.cr",
        pass: "12345",
        nombre: "Usuario Operador",
        role: "Operador"
    }
];

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorElement = document.getElementById("loginError");


    console.log("Email:", email);
    const user = defaultUsers.find(
        u => u.email === email && u.pass === pass
    );

    if (user) {
        guardarSesion(user);
        window.location.href = "dashboard.html";
    } else {
        errorElement.textContent =
            "Credenciales inválidas. Verifique correo y contraseña.";
    }
});

// Guardar sesión
function guardarSesion(user) {
    localStorage.setItem(
        "activeSession",
        JSON.stringify({
            nombre: user.nombre,
            email: user.email,
            role: user.role,
            loginTime: new Date().toLocaleString()
        })
    );
}