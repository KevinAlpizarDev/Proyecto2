// LOGIN
const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})
// MODAL KEVIN
const modales = document.querySelector('.modales');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modales');
const btnShowModal = document.querySelector('.show-modales'); // Botón específico

const openModal = function () {
    modales.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modales.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Event listener solo para el botón específico
btnShowModal.addEventListener('click', function () {
    openModal(); // Llama a la función openModal cuando se hace clic en el botón
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modales.classList.contains('hidden')) {
        closeModal();
    }
});

// LOGICA PARA AGREGAR IMAGEN

let form = document.getElementById("myForm")
let imgInput = document.querySelector(".img")
let file = document.getElementById("imgInput")
let userName = document.getElementById("name")

let city = document.getElementById("city")
let email = document.getElementById("email")

let submitBtn = document.querySelector(".submit")
let userInfo = document.getElementById("data")
let modal = document.getElementById("userForm")
let modalTitle = document.querySelector("#userForm .modal-title")
let newUserBtn = document.querySelector(".show-modal")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()



file.onchange = function () {
    if (file.files[0].size < 1000000) {  // 1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function (e) {
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(file.files[0])
    }
    else {
        alert("This file is too large!")
    }
}

function showInfo() {
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove());
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" alt="" width="40" height="40"></td>
            <td>${element.employeeName}</td>
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

showInfo()


function readInfo(pic, name, city, email) {
    document.querySelector('.showImg').src = pic,
        document.querySelector('#showName').value = name,

        document.querySelector("#showCity").value = city,
        document.querySelector("#showEmail").value = email

}

//TAMAÑO DE IMAGEN
function bigImg(x) {
    x.style.height = "150px";
    x.style.width = "150px";
}

function normalImg(x) {
    x.style.height = "40px";
    x.style.width = "40px";
}

function deleteInfo(index) {
    if (confirm("Are you sure want to delete?")) {
        getData.splice(index, 1)
        localStorage.setItem("userProfile", JSON.stringify(getData))
        showInfo()
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "/src/img/album-icon.svg" : imgInput.src,
        employeeName: userName.value,

        employeeCity: city.value,
        employeeEmail: email.value,

    }

    if (!isEdit) {
        getData.push(information)
    }
    else {
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfile', JSON.stringify(getData))

    // submitBtn.innerText = "Submit"
    // modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "/src/img/album-icon.svg"


})
