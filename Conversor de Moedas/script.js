const currencyToConvert    = document.querySelector('#first-currency');
const convertCurrency      = document.querySelector('#second-currency');
const span                 = document.querySelector('#value-span');
const valueInput           = document.querySelector('#value');
const resultDisplayElement = document.querySelector('#convertion-result')

currencyToConvert.addEventListener('change', () => {
  switch(currencyToConvert.value) {
    case 'USD':
      span.textContent = '(em dólar)';
      break;
    case 'BRL':
      span.textContent = '(em real)';
      break;
    case 'EUR':
      span.textContent = '(em euro)';
      break;
    case 'BTC':
      span.textContent = '(em bitcoin)';
      break;
  }
});

change.addEventListener('click', () => {
  const toConvert = currencyToConvert.value;
  const convertTo = convertCurrency.value;

  convertCurrency.value   = toConvert;
  currencyToConvert.value = convertTo;
});

convertBtn.addEventListener('click', convert);

function convert() {
  const toConvert = currencyToConvert.value;
  const convertTo = convertCurrency.value;

  const valueToConvert = Number(valueInput.value);

  if(!verifyValue(valueToConvert)) {
    return;
  }

  let result;

  switch(toConvert) {
    case 'BRL':
      if(convertTo == 'BRL') {
        result = valueToConvert;
      }

      if(convertTo == 'USD') {
        result = valueToConvert / 5.24;
      }
      
      if(convertTo == 'EUR') {
        result = valueToConvert / 5.19;
      }

      if(convertTo == 'BTC') {
        result = valueToConvert / 99558.89;
      }
      break;

    case 'USD':
      if(convertTo == 'USD') {
        result = valueToConvert;
      }

      if(convertTo == 'BRL') {
        result = valueToConvert * 5.24;
      }

      if(convertTo == 'EUR') {
        result = valueToConvert * 1.01;
      }

      if(convertTo == 'BTC') {
        result = valueToConvert / 18964.40;
      }
      break;

    case 'EUR':
      if(convertTo == 'EUR') {
        result = valueToConvert;
      }

      if(convertTo == 'BRL') {
        result = valueToConvert * 5.20;
      }

      if(convertTo == 'USD') {
        result = valueToConvert * 0.99;
      }

      if(convertTo == 'BTC') {
        result = valueToConvert / 19195.55;
      }
      break;

    case 'BTC':
      if(convertTo == 'BTC') {
        result = valueToConvert;
      }

      if(convertTo == 'BRL') {
        result = valueToConvert * 99558.89;
      }

      if(convertTo == 'EUR') {
        result = valueToConvert * 19195.55;
      }

      if(convertTo == 'USD') {
        result = valueToConvert * 18964.40;
      }
      break;
  }

  result = Number(result.toFixed(2));

  if(result.toString().length > 12) {
    result = result.toExponential(2);
  }

  displayConvertResult(result, convertTo)
}

function verifyValue(valueToVerify) {
  if(valueToVerify <= 0) {
    alert('[ERROR] É necessário inserir um valor válido!');
    return false;
  }

  return true;
}

function displayConvertResult(resultValue, resultCurrency) {
  switch(resultCurrency) {
    case 'USD':
      resultDisplayElement.textContent = `$ ${resultValue}`;
      break;
    case 'BRL':
      resultDisplayElement.textContent = `R$ ${resultValue}`;
      break;
    case 'EUR':
      resultDisplayElement.textContent = `€ ${resultValue}`;
      break;
    case 'BTC':
      resultDisplayElement.textContent = `₿ ${resultValue}`;
      break;
  }
}