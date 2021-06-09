let diameter = 0
let radius = 0
let area = 0
let circ = 0

document.getElementById('calc-btn').addEventListener('click', calculateCircle)

function calculateCircle () {
  document.getElementById('error-msg').innerHTML = null
  document.getElementById('answer-area').innerHTML = 'Area:'
  document.getElementById('answer-circ').innerHTML = 'Circumference:'

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
    document.getElementById('answer-area').innerHTML = 'Area: ' + area
    document.getElementById('answer-circ').innerHTML = 'Circumference: ' + circ
  } else {
    document.getElementById('error-msg').innerHTML = 'Please enter a positive number using numerical symbols.'
  }
}