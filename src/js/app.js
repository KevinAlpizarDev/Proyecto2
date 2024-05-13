// LOGIN
const user = JSON.parse(localStorage.getItem('login_success')) || false; // Obtiene los usuarios del almacenamiento local
if (!user) {
    window.location.href = 'login.html';
}

// EVENTO AL BOTON QUIT DE SALIDA
const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    alert('See you!');
    localStorage.removeItem('login_success');
    window.location.href = 'login.html';
});

// PARA EL MODAL SE SELECCIONA LOS ELEMENTO: MODALES, OVERLAY Y EL BOTON SHOWMODAL

const modales = document.querySelector('.modales');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modales');
const btnShowModal = document.querySelector('.show-modales'); // BOTON QUE ABRE EL MODAL

// MANIPULACION DE CLASES

const openModal = function () {
    // SE HACE VISIBLE LA CLASE MODALES Y OVERLAY
    modales.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// BOTON SECUNDARIO PARA CERRAR EL MODAL
const closeModal = function () {
    // SE HACE INVISIBLE LA CLASE MODALES Y OVERLAY
    modales.classList.add('hidden');
    overlay.classList.add('hidden');
};

// ESCUCHA CLICK PARA EL BOTON MODAL
btnShowModal.addEventListener('click', openModal);

// ESCUCHA CLICK PARA EL BOTON CLOSE MODAL Y EL OVERLAY
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modales.classList.contains('hidden')) {
        closeModal();
    }
});

// LOGICA PARA AGREGAR IMAGEN
let emailFormularios; // Variable para almacenar el correo del formulario

const form = document.getElementById("myForm");
const imgInput = document.querySelector(".img");
const file = document.getElementById("imgInput");
const userName = document.getElementById("name");
const city = document.getElementById("city");
const email = document.getElementById("email");
const userInfo = document.getElementById("data");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false, editId;

// Función para mostrar la información en la tabla
function showInfo() {
    userInfo.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas
    getData.forEach((element, index) => {
        const createElement = `<tr class="Details">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" alt="" width="40" height="40"></td>
            <td name-row">${element.employeeName}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>
                <button class="delete-boton" onclick="deleteInfo(${index})">x</button>
            </td>
        </tr>`;

        // Insertar el nuevo elemento al final de la tabla
        userInfo.insertAdjacentHTML('beforeend', createElement);
    });
}

// Función para cargar la imagen seleccionada
file.onchange = function () {
    if (file.files[0].size < 1000000) {  // 1MB = 1000000
        const fileReader = new FileReader();

        fileReader.onload = function (e) {
            imgInput.src = e.target.result;
        };

        fileReader.readAsDataURL(file.files[0]);
    } else {
        alert("This file is too large!");
    }
};

// Función para eliminar una entrada de la tabla
function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1);
        localStorage.setItem("userProfile", JSON.stringify(getData));
        showInfo();
    }
}

// Escuchar el envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const information = {
        picture: imgInput.src || "/src/img/album-icon.svg", // Utiliza el operador de cortocircuito para manejar el caso en el que no haya una imagen seleccionada
        employeeName: userName.value,
        employeeCity: city.value,
        employeeEmail: email.value,
    };

    // Capturar el valor del correo del formulario en la variable emailFormularios
    emailFormularios = email.value;
    console.log('Correo electrónico de los empleados:', emailFormularios);

    if (!isEdit) {
        getData.push(information);
    } else {
        isEdit = false;
        getData[editId] = information;
    }

    localStorage.setItem('userProfile', JSON.stringify(getData));
    showInfo();
    form.reset();
    imgInput.src = "/src/img/album-icon.svg";
});

// Mostrar la información inicial al cargar la página
showInfo();
