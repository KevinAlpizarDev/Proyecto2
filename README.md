const defaultFile = 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg';

const file = document.getElementById('foto');
const img = document.getElementById('img');
file.addEventListener('change', e => {
if (e.target.files[0]) {
const reader = new FileReader();
reader.onload = function (e) {
img.src = e.target.result;
}
console.log(reader.readAsDataURL(e.target.files[0]));
} else {

        console.log(img.src = defaultFile);
    }

});

/////////////////////////////////////////
const defaultFile = 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg';
const file = document.getElementById('foto');
const img = document.getElementById('image');

file.addEventListener('change', e => {
if (e.target.files[0]) {
const reader = new FileReader();
reader.onload = function (e) {
img.src = e.target.result;
}
console.log(reader.readAsDataURL(e.target.files[0]));

    } else {

        console.log(img.src = defaultFile);
    }

});

function myFunction() {
var x = document.createElement("INPUT");
x.setAttribute("type", "file");
document.body.appendChild(x);
}
parte de la noche

       MAIN SCRIPT JS

const defaultFile = 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg';
const file = document.getElementById('foto');
const img = document.getElementById('image');

file.addEventListener('change', e => {
if (e.target.files[0]) {
const reader = new FileReader();
reader.onload = function (e) {
img.src = e.target.result;
}
reader.readAsDataURL(e.target.files[0])

        // document.body.appendChild(reader.readAsDataURL(e.target.files[0]));

    } else {

        console.log(img.src = defaultFile);
    }

});

function myFunction() {
var x = document.createElement("INPUT");
x.setAttribute("type", "file");
document.body.appendChild(x);
}

// PRIME1R EJEMPLO

// const defaultFile = 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg';
// const file = document.getElementById('foto');
// const img = document.getElementById('image');

// file.addEventListener('change', e => {
// if (e.target.files[0]) {
// const reader = new FileReader();
// reader.onload = function (e) {
// img.src = e.target.result;
// }
// console.log(reader.readAsDataURL(e.target.files[0]));

// } else {

// console.log(img.src = defaultFile);
// }
// });

// function myFunction() {
// var x = document.createElement("INPUT");
// x.setAttribute("type", "file");
// document.body.appendChild(x);
// }

// LOCALSTORAGE
// guardar_localstorage();

// function guardar_localstorage() {

// let persona = {

// nombre: "Kevin",
// edad: 31,
// correo: "Kevin@fwd.com",
// idiomas: {

// nativo: "Español",
// secundario: "Ingles"

// }
// };

// let nombre = "Kevin";
// localStorage.setItem("nombre", JSON.stringify(nombre))
// // localStorage.setItem("persona", JSON.stringify(persona))

// }

var myObject = { 'a': 1, 'b': 2, 'c': 3 };

for (var key in myObject) {
if (myObject.hasOwnProperty(key)) {
myObject[key] \*= 2;
}
}

console.log(myObject);
// { 'a': 2, 'b': 4, 'c': 6 }

HTML IMAGENES

    <title>CRUD Operations</title>

    <link rel="stylesheet" href="style.css">
    </head>

    <body>


        <section class="p-3">

            <div class="row">
                <div class="col-12">
                    <button class="btn btn-primary newUser" data-bs-toggle="modal" data-bs-target="#userForm">New User
                        <i class="bi bi-people"></i></button>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <table class="table table-striped table-hover mt-3 text-center table-bordered">

                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Post</th>
                                <th>Start Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody id="data"></tbody>

                    </table>
                </div>
            </div>

        </section>


        <!--Modal Form-->
        <div class="modal fade" id="userForm">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Fill the Form</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">

                        <form action="#" id="myForm">

                            <div class="card imgholder">
                                <label for="imgInput" class="upload">
                                    <input type="file" name="" id="imgInput">
                                    <i class="bi bi-plus-circle-dotted"></i>
                                </label>
                                <img src="./image/Profile Icon.webp" alt="" width="200" height="200" class="img">
                            </div>

                            <div class="inputField">
                                <div>
                                    <label for="name">Name:</label>
                                    <input type="text" name="" id="name" required>
                                </div>
                                <div>
                                    <label for="age">Age:</label>
                                    <input type="number" name="" id="age" required>
                                </div>
                                <div>
                                    <label for="city">City:</label>
                                    <input type="text" name="" id="city" required>
                                </div>
                                <div>
                                    <label for="email">E-mail:</label>
                                    <input type="email" name="" id="email" required>
                                </div>
                                <div>
                                    <label for="phone">Number:</label>
                                    <input type="text" name="" id="phone" minlength="11" maxlength="11" required>
                                </div>
                                <div>
                                    <label for="post">Post:</label>
                                    <input type="text" name="" id="post" required>
                                </div>
                                <div>
                                    <label for="sDate">Start Date:</label>
                                    <input type="date" name="" id="sDate" required>
                                </div>
                            </div>

                        </form>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" form="myForm" class="btn btn-primary submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <!--Read Data Modal-->
        <div class="modal fade" id="readData">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Profile</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">

                        <form action="#" id="myForm">

                            <div class="card imgholder">
                                <img src="./image/Profile Icon.webp" alt="" width="200" height="200" class="showImg">
                            </div>

                            <div class="inputField">
                                <div>
                                    <label for="name">Name:</label>
                                    <input type="text" name="" id="showName" disabled>
                                </div>
                                <div>
                                    <label for="age">Age:</label>
                                    <input type="number" name="" id="showAge" disabled>
                                </div>
                                <div>
                                    <label for="city">City:</label>
                                    <input type="text" name="" id="showCity" disabled>
                                </div>
                                <div>
                                    <label for="email">E-mail:</label>
                                    <input type="email" name="" id="showEmail" disabled>
                                </div>
                                <div>
                                    <label for="phone">Number:</label>
                                    <input type="text" name="" id="showPhone" minlength="11" maxlength="11" disabled>
                                </div>
                                <div>
                                    <label for="post">Post:</label>
                                    <input type="text" name="" id="showPost" disabled>
                                </div>
                                <div>
                                    <label for="sDate">Start Date:</label>
                                    <input type="date" name="" id="showsDate" disabled>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>

EL JAVASCRIPT

//ESTE ES EL TUTORIAL
var form = document.getElementById("myForm"),
imgInput = document.querySelector(".img"),
file = document.getElementById("imgInput"),
userName = document.getElementById("name"),
age = document.getElementById("age"),
city = document.getElementById("city"),
email = document.getElementById("email"),
phone = document.getElementById("phone"),
post = document.getElementById("post"),
sDate = document.getElementById("sDate"),
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
imgInput.src = "./image/Profile Icon.webp"
form.reset()
})

file.onchange = function () {
if (file.files[0].size < 1000000) { // 1MB = 1000000
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
            <td>${element.employeeAge}</td>
<td>${element.employeeCity}</td>
            <td>${element.employeeEmail}</td>
<td>${element.employeePhone}</td>
            <td>${element.employeePost}</td>
<td>${element.startDate}</td>

            <td>
                <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

                <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeAge}', '${element.employeeCity}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeePost}', '${element.startDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

                <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>

            </td>
        </tr>`

        userInfo.innerHTML += createElement
    })

}
showInfo()

function readInfo(pic, name, age, city, email, phone, post, sDate) {
document.querySelector('.showImg').src = pic,
document.querySelector('#showName').value = name,
document.querySelector("#showAge").value = age,
document.querySelector("#showCity").value = city,
document.querySelector("#showEmail").value = email,
document.querySelector("#showPhone").value = phone,
document.querySelector("#showPost").value = post,
document.querySelector("#showsDate").value = sDate
}

function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate) {
isEdit = true
editId = index
imgInput.src = pic
userName.value = name
age.value = Age
city.value = City
email.value = Email,
phone.value = Phone,
post.value = Post,
sDate.value = Sdate

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
        picture: imgInput.src == undefined ? "./image/Profile Icon.webp" : imgInput.src,
        employeeName: userName.value,
        employeeAge: age.value,
        employeeCity: city.value,
        employeeEmail: email.value,
        employeePhone: phone.value,
        employeePost: post.value,
        startDate: sDate.value
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

    imgInput.src = "./image/Profile Icon.webp"

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()

})


















<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="/src/styles/main.css">
    <title>Home</title>
</head>

<body>
    <h1>Home</h1>

    <!-- CODIGO PATITO -->

    <section class="">

        <div class="">
            <div class="">

                <button class="newUser" data-bs-toggle="modal" data-bs-target="#userForm">Try it <i
                        class="bi bi-people"></i></button>

                <!-- <button class="newUser" data-bs-toggle="modal" data-bs-target="#userForm">New User
                    <i class="bi bi-people"></i></button> -->
            </div>
        </div>

        <div class="">
            <div class="">
                <table class="table-class">

                    <!-- <thead> -->
                    <tr>
                        <th>S.No</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>

                        <th>City</th>



                        <th>Action</th>
                    </tr>
                    <!-- </thead> -->

                    <tbody id="data"></tbody>

                </table>
            </div>
        </div>

    </section>


    <!--Modal Form-->
    <div class="modal fade" id="userForm">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Fill the Form</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                    <form action="#" id="myForm">

                        <div class="card imgholder">
                            <label for="imgInput" class="upload">
                                <input type="file" name="" id="imgInput">
                                <i class="bi bi-plus-circle-dotted"></i>
                            </label>
                            <img src="./src/img/album-icon.svg" alt="" width="200" height="200" class="img">
                        </div>

                        <div class="inputField">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" name="" id="name" required>
                            </div>

                            <div>
                                <label for="city">City:</label>
                                <input type="text" name="" id="city" required>
                            </div>
                            <div>
                                <label for="email">E-mail:</label>
                                <input type="email" name="" id="email" required>
                            </div>



                        </div>

                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" form="myForm" class="btn btn-primary submit">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <!--Read Data Modal-->
    <div class="modal fade" id="readData">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Profile</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                    <form action="#" id="myForm">

                        <div class="card imgholder">
                            <img src="./src/img/album-icon.svg" alt="" width="200" height="200" class="showImg">
                        </div>

                        <div class="inputField">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" name="" id="showName" disabled>
                            </div>

                            <div>
                                <label for="city">City:</label>
                                <input type="text" name="" id="showCity" disabled>
                            </div>
                            <div>
                                <label for="email">E-mail:</label>
                                <input type="email" name="" id="showEmail" disabled>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- LOGOUT TUTORIAL -->
    <button id="logout">Logout</button>
    </section>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="/src/js/app.js"></script>

</body>

</html>