const resultElement = document.querySelector('.result');

calculateBtn.addEventListener("click", () => {
  const gradeInputElements = document.querySelectorAll('input[type="number"]');
  const gradeValues = []

  gradeInputElements.forEach((element) => {
    gradeValues.push(Number(element.value));
  })

  const nameValue = document.querySelector('#name').value;

  if(verifyInputValues(nameValue, gradeValues)) {
    const studentFinalAvarage = calculateAvarage(gradeValues);
    verifyIfStudentPassed(studentFinalAvarage);
  }
});

function verifyInputValues(name, gradeValues) {
  if(!name) {
    alert('[ERROR] Coloque o nome do Aluno.');
    return false;
  }

  if(name.length > 10) {
    alert('[ERROR] O nome do Aluno excedeu o máximo de 10 caracteres.')
    return false;
  }

  for(let value of gradeValues) {
    if(value < 0 || value > 10) {
      alert('[ERROR] O valor das Notas precisar ser entre 0 e 10.');
      return false;
    }
  }

  return true;
}

function calculateAvarage(gradeValues) {
  let finalGrade = 0;
  
  for(let value of gradeValues) {
    finalGrade += value;
  }

  const result = finalGrade / 4;

  return result.toFixed(1);
}

function verifyIfStudentPassed(studentFinalAvarage) {
  if(studentFinalAvarage >= 5) {
    resultElement.innerHTML = `<p>Você <span class="green">CONSEGUIU</span> passar!</p> <p>Sua média foi: ${studentFinalAvarage} 😁</p>`;
  } else {
    resultElement.innerHTML = `<p>Infelizmente você <span class="red">NÃO</span> passou!</p> <p>Sua média foi: ${studentFinalAvarage} 😢</p>`;
  }
}