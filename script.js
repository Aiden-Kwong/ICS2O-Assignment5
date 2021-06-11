// Define all variables used.
let diameter = 0
let radius = 0
let area = 0
let circ = 0

// This event listener activates the calculateCircle function when the button is clicked.
document.getElementById('calc-btn').addEventListener('click', calculateCircle)

// This function calculates the area and circumference of a circle given the diameter.
function calculateCircle () {
  // Clear all text fields to start fresh.
  document.getElementById('error-msg').innerHTML = null
  document.getElementById('answer-area').innerHTML = 'Area:'
  document.getElementById('answer-circ').innerHTML = 'Circumference:'

  // Get the value of the diameter from the text field.
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)

  // Console log the diameter for backend purposes.
  console.log(diameter)
  console.log('--')

  // If the diameter is a positive number, follow this branch.
  if (!isNaN(diameter) && diameter > 0) {
    // Determine radius by dividing diameter by 2.
    radius = diameter / 2

    // Calculate circumference by multiplying diameter by pi.
    circ = diameter * Math.PI

    // Calculate area by squaring radius and multiplying by pi.
    area = (radius * radius) * Math.PI

    // Console log all of these values for backend purposes.
    console.log(area)
    console.log('-')
    console.log(circ)
    console.log('---')

    // Display area in the correct paragraph.
    document.getElementById('answer-area').innerHTML = 'Area: ' + area

    // Display circumference in the correct paragraph.
    document.getElementById('answer-circ').innerHTML = 'Circumference: ' + circ

  // Otherwise, display this error message.
  } else {
    document.getElementById('error-msg').innerHTML = 'Please enter a positive number using numerical symbols.'
  }
}
