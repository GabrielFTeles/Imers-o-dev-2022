const numberInput = document.querySelector('#number-input');
const tipElement  = document.querySelector('.tip');

let secretNumber  = generateRandomNumber();
let userTriesLeft = 3; 

updateLifesDisplayed();

function generateRandomNumber() {
  return Math.floor(Math.random() * 11);
}

tryBtn.addEventListener('click', () => {
  const userNumber = numberInput.value;

  if(verifyIfNumberIsValid(userNumber)) {
    checkUserAnswer(userNumber);
  }
})

function verifyIfNumberIsValid(userNumber) {
  if(!userNumber) {
    alert('[ERROR] Insira um número para tentar.')
    return false;
  }

  if(userNumber < 0 || userNumber > 10) {
    alert('[ERROR] É preciso colocar um número entre 0 e 10.')
    return false;
  }

  return true;
}

function checkUserAnswer(userNumber) {
  if(userNumber == secretNumber) {
    gameWon();
    return;
  }

  --userTriesLeft;

  shakeEffect();
  updateLifesDisplayed();

  showTip(userNumber);

  if(userTriesLeft == 0) {
    gameLost();
    return;
  }
}

function shakeEffect() {
  const container = document.querySelector('.container');

  container.classList.add('shake');

  setTimeout(() => {
    container.classList.remove('shake')
  }, 500);
}

function updateLifesDisplayed() {
  const hearthsElement = document.querySelector('.hearths');

  hearthsElement.innerHTML = '';

  for(let i = 0; i < userTriesLeft; i++) {
    hearthsElement.innerHTML += '<i class="fa-solid fa-heart"></i>'
  }
}

function newGame() {
  numberInput.value = '';
  tipElement.textContent = 'tente um número e receba uma dica se errar';

  secretNumber = generateRandomNumber();
  userTriesLeft = 3;

  updateLifesDisplayed();
}

function gameWon() {
  alert(`[GANHOU] Eita ***** tu conseguiu adivinhar o número secreto era ${secretNumber}, praticamente um X-MAN.
Vou trocar o número e duvido tu adivinhar novamente!`)

  newGame();
}

function gameLost() {
  alert(`[PERDEU] Infelizmente você não conseguiu adivinhar e perdeu, o número secreto era ${secretNumber}.
Um novo jogo será criado, agora você consegue!`);

  newGame();
}

function showTip(userNumber) {
  if(userNumber < secretNumber) {
    tipElement.textContent = 'que tal tentar um número maior, rs.'
  }

  if(userNumber > secretNumber) {
    tipElement.textContent = 'se eu fosse você tentava um número menor, rs.'
  }
}