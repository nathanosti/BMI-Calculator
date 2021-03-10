const calculate = document.getElementById('calculate');

function bmi() {
  const name = document.getElementById('name').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const resultParagraph = document.getElementById('result');

  if (name !== '' && height !== '' && weight !== '') {
    const result = weight/(height*height);
    if (result == 0 || result < 18.5) {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed(2)} so you are underweight!`
    } else if(result == 18.5 || result < 24.9) {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed (2)} so you are normal weight!`
    } else if(result == 24.9 || result < 29.9 ) {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed (2)} so you are overweight!`
    }  else if(result == 30 || result < 34.9 ) {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed (2)} so you are overweight (Grade 1)!`
    }  else if(result == 35 || result < 39.9 ) {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed (2)} so you have Severe Obesity (Grade 2)!`
    } else {
      resultParagraph.textContent = `${name} your BMI is ${result.toFixed (2)} so you have Morbid Obesity (Grade 3)!`
    }

  } else {
    resultParagraph.textContent = 'Fill in all fields!'
  }
}

calculate.addEventListener('click', bmi);
