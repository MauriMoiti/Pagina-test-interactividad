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


const booksList = [];

booksList.push({
    authorBook: 'Jorge Luis Borge',
    titleBook: 'El Aleph',
    imageBook: './images/bookCatalog/elAleph.jpeg'
});
booksList.push({
    authorBook: 'Hinde Pomeraniec',
    titleBook: 'Rusos de Putin',
    imageBook: './images/bookCatalog/rusosDePutin.jpeg'
});
booksList.push({
    authorBook: 'Andrew Roberts',
    titleBook: 'Churchill',
    imageBook: './images/bookCatalog/churchill_andrew-roberts.jpg'
});

for (let book of booksList) {

    // div card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book_card');

    // creamos la lógica para almacenar las imagenes que esten contenidas en los objetos de nuestro array booksList
    const bookImg = document.createElement('img');
    bookImg.classList.add('book_img'); 
    bookImg.setAttribute('src', book.imageBook); 
    
    // div que contiene al title y author del book
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book_info');

    const bookTitleAuthor = document.createElement('p');
    bookTitleAuthor.classList.add('book_title');
    bookTitleAuthor.innerText = `${book.titleBook} -
    ${book.authorBook}`;
    
    // figure que contiene el icon para ver más información sobre el libro
    const bookFigure = document.createElement('figure');
    bookFigure.classList.add('book_figure');

    const bookButton = document.createElement('button');
    bookButton.classList.add('figure_button');
    bookButton.setAttribute('type', 'button');
    
    

    const bookIcon = document.createElement('img');
    bookIcon.classList.add('book_icon');
    bookIcon.setAttribute('src', './icons/icon-read.png');
    const bookText = document.createTextNode('Details');

    //anidación en order ascendente 
    bookButton.append(bookIcon, bookText);
    bookFigure.append(bookButton);
    bookInfo.append(bookTitleAuthor, bookFigure);
    bookCard.append(bookImg, bookInfo);

    document.querySelector('.book_catalog').appendChild(bookCard); // Adjuntar el elemento bookCatalog al contenedor en el HTML
};