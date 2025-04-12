function planetsOff() {
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  
    for (let i = 0; i < planets.length; i++) {
      document.getElementById(planets[i])?.style.display = 'none';
      document.getElementById(planets[i] + 'Info')?.style.display = 'none';
    }
  }
  
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
  