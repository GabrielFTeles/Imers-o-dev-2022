addBtn.addEventListener('click', () => {
  const movieName = movieNameInput.value;
  const movieURL  = movieURLInput.value;

  if(verifyParameters(movieName, movieURL)) {
    addNewMovie(movieName, movieURL);
  }
});

const movieNameInput = document.querySelector('#movie-name');
const movieURLInput  = document.querySelector('#movie-url');
const cardsList      = document.querySelector('.cards-list');
const errorElement   = document.querySelector('.error')

const moviesList = [
  {
    id: 1,
    name: "Viver Duas Vezes",
    url: "https://media.fstatic.com/4DKLaKPdYqM-YymxiWJReqrZpbg=/290x478/smart/media/movies/covers/2020/05/Viver_Duas_Vezes_6.jpg"
  },
  {
    id: 2,
    name: "O Preço do Amanhã",
    url: "https://upload.wikimedia.org/wikipedia/pt/a/a3/In_Time.jpg"
  },
  {
    id: 3,
    name: "Por lugares Incríveis",
    url: "https://poltronanerd.com.br/wp-content/uploads/2020/02/poltrona-por-lugares-incriveis-poster-691x1024.jpg"
  },
  {
    id: 4,
    name: "Harry Potter e a Pedra Filosofal",
    url: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 5,
    name: "Interestelar",
    url: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
  },
  {
    id: 6,
    name: "O Hobbit",
    url: "https://3.bp.blogspot.com/-Xk26CEGNSr8/UsbcAl8KM5I/AAAAAAAAPuU/un80T1-R3ns/s1600/O_hobbit.jpg"
  },
  {
    id: 7,
    name: "A Menina que Roubava Livros",
    url: "https://2.bp.blogspot.com/-TOCRLYBV3N4/UsbbAXBZmkI/AAAAAAAAPuM/DbPHOcuv6HA/s1600/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg"
  },
];

updateDisplayedMovies()

function addNewMovie(movieName, movieURL) {
  const movie = {
    id: moviesList.length + 1,
    name: movieName,
    url: movieURL
  }

  moviesList.push(movie)

  updateDisplayedMovies();
}

function verifyParameters(name, url) {
  if(!name) {
    errorElement.textContent = 'É necessário colocar o nome do Filme/Série.'
    return false;
  }

  if(!(url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg'))) {
    errorElement.textContent = 'É necessário colocar um link de uma imagem .jpg, .png ou .jpeg'
    return false;
  }

  for(let i in moviesList) {
    if(url == moviesList[i].url || name == moviesList[i].name) {
      errorElement.textContent = 'Este filme já existe na lista, tente adicionar um novo.'
      return false;
    }
  }

  errorElement.textContent = '';
  return true;
}

function createCardElement(movieName, imageURL, movieID) {
  const cardDiv      = document.createElement('div');
  const cardImg      = document.createElement('img');
  const cardTitle    = document.createElement('span');
  const removeButton = document.createElement('button');

  cardImg.src = imageURL;

  if(movieName.length > 20) {
    cardTitle.textContent = movieName.substr(0,21) + "...";
  } else {
    cardTitle.textContent = movieName;
  }

  cardDiv.setAttribute('class', 'card');
  cardDiv.setAttribute('onmouseover', 'mouseOver(event)');
  cardDiv.setAttribute('onmouseout', 'mouseOut(event)');
  cardDiv.setAttribute('title', movieName);

  removeButton.setAttribute('class', 'fa-solid fa-trash-can');
  removeButton.setAttribute('onclick', `removeMovie(${movieID})`);
  removeButton.setAttribute('title', 'Remover Filme/Série');

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(removeButton);
  cardDiv.appendChild(cardTitle);

  return cardDiv;
}

function updateMoviesId() {
  for(let i in moviesList) {
    const ID = Number(i) + 1;

    moviesList[i].id = ID;
  }
}

function updateDisplayedMovies() {
  cardsList.innerHTML = '';

  moviesList.forEach((movie) => {
    const cardElement = createCardElement(movie.name, movie.url, movie.id);

    cardsList.appendChild(cardElement);
  })
}

function removeMovie(id) {
  const index = id - 1;

  moviesList.splice(index, 1);

  updateMoviesId();
  updateDisplayedMovies();
}

function mouseOver(event) {
  const allCards = document.querySelectorAll('.card');
  const target = event.target.offsetParent;

  allCards.forEach((card) => {
    if(card == target) {
      card.classList.add('show-remove')
      return;
    }

    card.classList.add('blur')
  })
}

function mouseOut(event) {
  const allCards = document.querySelectorAll('.card');
  const target = event.target.offsetParent;

  allCards.forEach((card) => {
    if(card == target) {
      card.classList.remove('show-remove')
      return;
    }

    card.classList.remove('blur')
  })
}