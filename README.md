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
