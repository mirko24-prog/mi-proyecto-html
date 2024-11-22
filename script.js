// Función para registrar un usuario
function registrarUsuario(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Verificar si el usuario ya existe
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuariosRegistrados.find(user => user.usuario === usuario)) {
        alert('Este usuario ya está registrado.');
        return;
    }

    // Crear un nuevo usuario
    usuariosRegistrados.push({ usuario, contraseña });

    // Guardar los usuarios en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

    alert('¡Cuenta creada exitosamente!');
    window.location.href = 'login.html'; // Redirige al login
}

// Función para iniciar sesión
function iniciarSesion(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario-login').value;
    const contraseña = document.getElementById('contraseña-login').value;

    // Obtener usuarios desde localStorage
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario existe
    const usuarioValido = usuariosRegistrados.find(user => user.usuario === usuario && user.contraseña === contraseña);

    if (usuarioValido) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'productos.html'; // Redirige a la página de productos
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
}