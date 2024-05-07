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