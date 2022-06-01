//Variables
const URL = "https://the-dune-api.herokuapp.com/books/12";
const containerBooks = document.getElementById('container');

//Se trae la API
const asyncFetchData = async (URL) =>{
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

//Ejecutar en pantalla sin boton
window.addEventListener('load', async() => {
    const data = await asyncFetchData(URL);
    const theBooks = data;
    theBooks.map(theBooks => getBooks(theBooks));
});

//Renderizar la cards
function getBooks(theBooks) {
    
    const cards = document.createElement('div');
    cards.setAttribute('class', 'card')

    const title = document.createElement('h2');
    title.textContent = theBooks.title;
    cards.appendChild(title);

    const author = document.createElement('p');
    author.textContent = theBooks.author;
    cards.appendChild(author);

    const year = document.createElement('p');
    year.textContent = theBooks.year;
    cards.appendChild(year);

    containerBooks.appendChild(cards);
}
