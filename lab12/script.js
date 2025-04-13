function PlanetsOff() {
  // Hide all planet images
  document.getElementById('mercury').style.display = 'none';
  document.getElementById('venus').style.display = 'none';
  document.getElementById('earth').style.display = 'none';
  document.getElementById('mars').style.display = 'none';
  document.getElementById('jupiter').style.display = 'none';
  document.getElementById('saturn').style.display = 'none';
  document.getElementById('uranus').style.display = 'none';
  document.getElementById('neptune').style.display = 'none';

  // Hide all planet texts
  document.getElementById('mercuryInfo').style.display = 'none';
  document.getElementById('venusInfo').style.display = 'none';
  document.getElementById('earthInfo').style.display = 'none';
  document.getElementById('marsInfo').style.display = 'none';
  document.getElementById('jupiterInfo').style.display = 'none';
  document.getElementById('saturnInfo').style.display = 'none';
  document.getElementById('uranusInfo').style.display = 'none';
  document.getElementById('neptuneInfo').style.display = 'none';
}

// Functions to display selected planet
function mercuryOn() {
  document.getElementById('mercury').style.display = 'block';
  document.getElementById('mercuryInfo').style.display = 'block';
}

function venusOn() {
  document.getElementById('venus').style.display = 'block';
  document.getElementById('venusInfo').style.display = 'block';
}

function earthOn() {
  document.getElementById('earth').style.display = 'block';
  document.getElementById('earthInfo').style.display = 'block';
}

function marsOn() {
  document.getElementById('mars').style.display = 'block';
  document.getElementById('marsInfo').style.display = 'block';
}

function jupiterOn() {
  document.getElementById('jupiter').style.display = 'block';
  document.getElementById('jupiterInfo').style.display = 'block';
}

function saturnOn() {
  document.getElementById('saturn').style.display = 'block';
  document.getElementById('saturnInfo').style.display = 'block';
}

function uranusOn() {
  document.getElementById('uranus').style.display = 'block';
  document.getElementById('uranusInfo').style.display = 'block';
}

function neptuneOn() {
  document.getElementById('neptune').style.display = 'block';
  document.getElementById('neptuneInfo').style.display = 'block';
}