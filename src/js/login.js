
const loginForm = document.querySelector('#loginForm'); // Selecciona el formulario de inicio de sesión por su ID
loginForm.addEventListener('submit', (e) => { // Agrega un listener para el evento submit del formulario
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    const email = document.querySelector('#email').value; // Obtiene el valor del campo de correo electrónico
    const password = document.querySelector('#password').value; // Obtiene el valor del campo de contraseña
    const Users = JSON.parse(localStorage.getItem('users')) || []; // Obtiene los usuarios del almacenamiento local
    const validUser = Users.find(user => user.email === email && user.password === password); // Busca el usuario que coincida con las credenciales ingresadas

    if (!validUser) { // Si no se encuentra un usuario válido
        return window.location.href = 'login.html'; // Redirige de vuelta a la página de inicio de sesión
    
    }

    localStorage.setItem('login_success', JSON.stringify(validUser)); // Establece el usuario como autenticado en el almacenamiento local
    window.location.href = 'index.html'; // Redirige a la página principal
});
