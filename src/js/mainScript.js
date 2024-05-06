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