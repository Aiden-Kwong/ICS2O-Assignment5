let diameter = 0
let radius = 0
let area = 0
let circ = 0

document.getElementById('calc-btn').addEventListener('click', calculateCircle)

function calculateCircle () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  console.log(diameter)
  console.log('--')
  if (!isNaN(diameter) && diameter > 0) {
    radius = diameter / 2
    circ = diameter * Math.PI
    area = (radius * radius) * Math.PI
    console.log(area)
    console.log('-')
    console.log(circ)
    console.log('---')
  } else {
    document.getElementById('error-msg').innerHTML = 'Please enter a positive number using numerical symbols.'
  }
}