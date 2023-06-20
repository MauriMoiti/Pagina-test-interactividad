const buttonLogin = document.querySelector('.button_login');
const menuLogin = document.querySelector('.menu_login');
const buttonSignIn = document.querySelector('.button_signIn')
const menuCreateAccount = document.querySelector('.menu_signIn');

// cuando se ejecuta el evento del click, la function toggleMenuLogin, por default elimina la clase menu_login y agrega la clase inactive, teniendo esta última display none. Al volver a hacer click en el button, sucede a la inversa. Se elimina la clase inactive y se agrega la clase menu_login haciendo que el menu vuelva a aparecer con el css cargado a su respectiva clase.
buttonLogin.addEventListener ('click', toggleMenuLogin);

function toggleMenuLogin() {
    menuLogin.classList.toggle('inactive');
    menuLogin.classList.toggle('menu_login');

     // Ocultar el menú de "Create account"
     menuCreateAccount.classList.add('inactive');
     menuCreateAccount.classList.remove('menu_signIn');  
};

// funcion para crear un nuevo usuario
buttonSignIn.addEventListener('click', toggleMenuCreateAccount)

function toggleMenuCreateAccount() {
    menuCreateAccount.classList.toggle('inactive');
    menuCreateAccount.classList.toggle('menu_signIn');

     // Ocultar el menú de "Login"
     menuLogin.classList.add('inactive');
     menuLogin.classList.remove('menu_login');
};