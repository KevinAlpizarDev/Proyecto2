const user = JSON.parse(localStorage.getItem('login_success')) || false //SI EXISTE UN USUARIO 
if (!user) { //SI NO SE LOGEA
    window.location.href = 'login.html' //ESTANDO EN LOGIN LO DIRIGE A LOGIN
}

const logout = document.querySelector('#logout')//TOMAMOS EL ID DEL OTON LOGOUT

logout.addEventListener('click', () => { //EVENTO CLICK DE DICHO BOTON 
    alert('Hasta pronto!')
    localStorage.removeItem('login_success') //TERMINA LA SESIÓN 
    window.location.href = 'login.html' //REDIRECCION AL LOGIN
})


//LOGICA CODIGO PATITO



var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    userName = document.getElementById("name"),

    city = document.getElementById("city"),
    email = document.getElementById("email"),

    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("userForm"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    newUserBtn = document.querySelector(".newUser")


let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

let isEdit = false, editId
showInfo()

newUserBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit',
        modalTitle.innerText = "Fill the Form"
    isEdit = false
    imgInput.src = ""
    form.reset()
})


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
    document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
    getData.forEach((element, index) => {
        let createElement = `<tr class="employeeDetails">
            <td>${index + 1}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.employeeName}</td>
            <td>${element.employeeEmail}</td>
            <td>${element.employeeCity}</td>

            <td>
              

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeCity}', '${element.employeeEmail}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })
}
showInfo()


function readInfo(pic, name, city, email) {
    document.querySelector('.showImg').src = pic,
        document.querySelector('#showName').value = name,

        document.querySelector("#showCity").value = city,
        document.querySelector("#showEmail").value = email

}


function editInfo(index, pic, name, City, Email) {
    isEdit = true
    editId = index
    imgInput.src = pic
    userName.value = name

    city.value = City
    email.value = Email,


        submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
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
        picture: imgInput.src == undefined ? "./src/img/album-icon.svg" : imgInput.src,
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

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showInfo()

    form.reset()

    imgInput.src = "./src/img/album-icon.svg"

    modal.style.display = "none"
    document.querySelector(".modal-backdrop").remove()
})







///////////////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});