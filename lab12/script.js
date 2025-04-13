function showPlanet(planet) {
  const planetImages = {
    mercury: '../images/mercury.jpg',
    venus: '../images/venus.jpg',
    earth: '../images/earth.jpg',
    mars: '../images/mars.jpg',
    jupiter: '../images/jupiter.jpg',
    saturn: '../images/saturn.jpg',
    uranus: '../images/uranus.jpg',
    neptune: '../images/neptune.jpg'
  };

  // Remove all active states
  const activeElements = document.querySelectorAll('.active');
  activeElements.forEach(el => el.classList.remove('active'));

  // Update image background
  const planetDiv = document.getElementById(planet);
  planetDiv.style.backgroundImage = `url('${planetImages[planet]}')`;

  // Add active classes with animation delay
  setTimeout(() => {
    planetDiv.classList.add('active');
    document.getElementById(`${planet}Info`).classList.add('active');
    document.querySelector(`[onclick="showPlanet('${planet}')"]`).classList.add('active');
  }, 50);

  // Scroll to active thumbnail
  const activeThumb = document.querySelector(`.thumbnail.active`);
  activeThumb.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });

  // Add temporary glow effect
  planetDiv.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.4)';
  setTimeout(() => {
    planetDiv.style.boxShadow = 'none';
  }, 800);
}
