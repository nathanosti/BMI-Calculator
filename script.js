const calculate = document.getElementById('calculate');

function bmi() {
  const name = document.getElementById('name').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const resultParagraph = document.getElementById('result');

  if (name !== '' && height !== '' && weight !== '') {
    const result = weight/(height*height);
    if (result == 0 || result < 18.5) {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com peso baixo!`
    } else if(result == 18.5 || result < 24.9) {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com peso normal!`
    } else if(result == 24.9 || result < 29.9 ) {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com sobre-peso!`
    }  else if(result == 30 || result < 34.9 ) {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com Obesidade (Grau 1)!`
    }  else if(result == 35 || result < 39.9 ) {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com Obesidade Severa (Grau 2)!`
    } else {
      resultParagraph.textContent = `${name} seu IMC é ${result.toFixed(2)} portanto você está com Obesidade Morbida (Grau 3)!`
    }

  } else {
    resultParagraph.textContent = 'Fill in all fields!'
  }
}

calculate.addEventListener('click', bmi);
