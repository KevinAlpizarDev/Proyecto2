const signupForm = document.querySelector('#signupForm') //SE TOMA EL FORMULARIO DE REGISTRO POR MEDIO DE ID
signupForm.addEventListener('submit', (e) => { //EVENTO SUBMIT, FUNCION CALL BACK 
    e.preventDefault() //EVITAR RECARGA DE PAGINA
    const name = document.querySelector('#name').value //TOMA VALOR DE LOS CAMPOS INPUT 
    const email = document.querySelector('#email').value 
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || [] //AQUÍ SE GUARDAN LOS USUARIOS NUEVOS
    const isUserRegistered = Users.find(user => user.email === email) //BUSCA EN LA CONSTANTE LA COINCIDENCIA DE CORREOS
    if (isUserRegistered) { //SI ES TRUE
        return alert('El usuario ya esta registado!')//YA ESTÁ REGISTRADO
    }

    Users.push({ name: name, email: email, password: password }) //GUARDAMOS UN OBJETO COMPLETO EN EL ARRAY
    localStorage.setItem('users', JSON.stringify(Users)) //SE GUARDA EN EL STORAGE "TODOS LOS USERS"
    alert('Registro Exitoso!') //ACEPTAR 
    window.location.href = 'login.html' //REDIRECCION A LOGIN

})