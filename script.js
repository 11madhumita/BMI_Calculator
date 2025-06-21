document.getElementById('btn').addEventListener('click', () => {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const result = document.getElementById('result');

  // Reset input borders
  heightInput.style.border = "1px solid black";
  weightInput.style.border = "1px solid black";

  if (Number.isNaN(height) || height <= 0) {
    heightInput.style.border = "2px solid red";
  }

  if (Number.isNaN(weight) || weight <= 0) {
    weightInput.style.border = "2px solid red";
  }

  if (
    Number.isNaN(height) ||
    Number.isNaN(weight) ||
    height <= 0 ||
    weight <= 0
  ) {
    result.innerHTML = '⚠️ Please enter valid positive numbers.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmio = bmi.toFixed(2);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Ideal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  result.innerHTML = `✅ Your BMI is ${bmio} – ${category}`;
});

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('height').style.border = "1px solid black";
  document.getElementById('weight').style.border = "1px solid black";
});
