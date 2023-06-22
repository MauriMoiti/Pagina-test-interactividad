const buttonLogin = document.querySelector('.button_login');
const menuLogin = document.querySelector('.inactive_menuLogin');
const buttonSignIn = document.querySelector('.button_signIn')
const menuCreateAccount = document.querySelector('.inactive_menuSignIn');
const textAreaPost = document.querySelector('.textarea_post');

// cuando se ejecuta el evento del click, la function toggleMenuLogin, por default elimina la clase menu_login y agrega la clase inactive, teniendo esta última display none. Al volver a hacer click en el button, sucede a la inversa. Se elimina la clase inactive y se agrega la clase menu_login haciendo que el menu vuelva a aparecer con el css cargado a su respectiva clase.
buttonLogin.addEventListener ('click', toggleMenuLogin);

function toggleMenuLogin() {
    menuLogin.classList.toggle('inactive_menuLogin');
    menuLogin.classList.toggle('menu_login');

     // Ocultar el menú de "Create account"
     menuCreateAccount.classList.add('inactive_menuSignIn');
     menuCreateAccount.classList.remove('menu_signIn');  
};

// funcion para crear un nuevo usuario
buttonSignIn.addEventListener('click', toggleMenuCreateAccount)

function toggleMenuCreateAccount() {
    menuCreateAccount.classList.toggle('inactive_menuSignIn');
    menuCreateAccount.classList.toggle('menu_signIn');

     // Ocultar el menú de "Login"
     menuLogin.classList.add('inactive_menuLogin');
     menuLogin.classList.remove('menu_login');
};

// function para modificar textarea. Verifica si la pantalla tiene un ancho máximo de 640px

// function checkScreenWidth () {
//     if (window.innerWidth <= 640) {
//         textAreaPost.setAttribute('cols', '30');
//     } else {
//         textAreaPost.setAttribute('cols', '60');
//     }
// }
// // Verifica el ancho de la pantalla al cargar y al redimensionar
// window.addEventListener('load', checkScreenWidth);
// window.addEventListener('resize', checkScreenWidth);