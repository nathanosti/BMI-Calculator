const calculate = document.getElementById('calculate');

function bmi() {
  const name = document.getElementById('name').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('result');

  if (name !== '' && height !== '' && weight !== '') {
    result.textContent = weight/(height*height);
  } else {
    result.textContent = 'Fill in all fields!'
  }
}

calculate.addEventListener('click', bmi);