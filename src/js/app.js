// LOGIN
const user = JSON.parse(localStorage.getItem('login_success')) || false  // Obtiene los usuarios del almacenamiento local
if (!user) {
    window.location.href = 'login.html'
}

// EVENTO AL BOTON QUIT DE SALIDA
const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    alert('See you!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})








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
btnShowModal.addEventListener('click', function () {
    openModal(); //SE INVOCA LA FUNCNION OPENMMODAL CON EL CLICK DEL BOTON
});


// ESCUCHA CLICK PARA EL BOTON CLOSE MODAL Y EL OVERLAY
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modales.classList.contains('hidden')) {
        closeModal();
    }
});

// LOGICA PARA AGREGAR IMAGEN
let emailFormularios; // Variable para almacenar el correo del formulario

let form = document.getElementById("myForm");
let imgInput = document.querySelector(".img");
let file = document.getElementById("imgInput");
let userName = document.getElementById("name");
let city = document.getElementById("city");
let email = document.getElementById("email");

let submitBtn = document.querySelector(".submit");
let userInfo = document.getElementById("data");
let modal = document.getElementById("userForm");
// let modalTitle = document.querySelector("#userForm .modal-title");
// let newUserBtn = document.querySelector(".show-modal");

let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];

let isEdit = false, editId;
showInfo();

file.onchange = function () {
    if (file.files[0].size < 1000000) {  // 1MB = 1000000
        let fileReader = new FileReader();

        fileReader.onload = function (e) {
            imgUrl = e.target.result;
            imgInput.src = imgUrl;
        };

        fileReader.readAsDataURL(file.files[0]);
    }
    else {
        alert("This file is too large!");
    }
};

function showInfo() {
    document.querySelectorAll('.personDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="Details">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" alt="" width="40" height="40"></td>
            <td name-row">${element.employeeName}</td>
            <td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
            <td>
                <button class="delete-boton" onclick="deleteInfo(${index})">x</button>
            </td>
        </tr>`;

        // Insertar el nuevo elemento al principio de la tabla
        userInfo.insertAdjacentHTML('afterbegin', createElement);
    });
}

showInfo();

function readInfo(pic, name, city, email) {
    document.querySelector('.showImg').src = pic;
    document.querySelector('#showName').value = name;
    document.querySelector("#showCity").value = city;
    document.querySelector("#showEmail").value = email;
}

//TAMAÑO DE IMAGEN
function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}

function normalImg(x) {
    x.style.height = "40px";
    x.style.width = "40px";
}

function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1);
        localStorage.setItem("userProfile", JSON.stringify(getData));
        showInfo();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const information = {
        picture: imgInput.src == undefined ? "/src/img/album-icon.svg" : imgInput.src,
        employeeName: userName.value,
        employeeCity: city.value,
        employeeEmail: email.value,
    };

    // Capturar el valor del correo del formulario en la variable emailFormularios
    emailFormularios = email.value;
    console.log('Correo electrónico de los empleados:', emailFormularios); // Agregar console.log aquí

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
