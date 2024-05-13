
const nameMain = document.querySelector('#nameMain');


const signupForm = document.querySelector('#signupForm');

const elementoPadre = document.querySelector(".nombre");
const nombreUsuario = document.createElement("h1");
const textoh1 = document.createTextNode("Kevin");







signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }else{
        

            Users.push({ name: name, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(Users));
            alert('Registro Exitoso!');
            window.location.href = 'login.html';
        
            // Imprimir el nombre en el elemento HTML y guardarlo en localStorage
            const elementoPadre = document.querySelector(".nombre");
            const nombreUsuario = document.createElement("h1");
            const textoh1 = document.createTextNode("Kevin");
            elementoPadre.appendChild(nombreUsuario);
            nombreUsuario.appendChild(textoh1);
        
        
   



    }




});


