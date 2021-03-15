const calculate = document.getElementById('calculate');

function bmi() {
  const name = document.getElementById('name').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const resultParagraph = document.getElementById('result');

  const result = weight/(height*height);
    
  const sulfix = (result == 0 || result < 18.5) ? 'so you are underweight!' :
                 (result == 18.5 || result < 24.9) ? 'so you are normal weight!' :
                 (result == 24.9 || result < 29.9) ? 'so you are overweight!' :
                 (result == 30 || result < 34.9) ? 'so you are overweight (Grade 1)!' :
                 (result == 35 || result < 39.9) ? 'so you are overweight (Grade 2)!' : 'so you have Morbid Obesity (Grade 3)'
                  
  const successMessage = `${name} your BMI is ${result.toFixed(2)} ${sulfix}`;
  const errorMessage = 'FULL FILL IN ALL FIELDS';

  resultParagraph.textContent = (name && height && weight) ? successMessage : errorMessage
}
calculate.addEventListener('click', bmi);
