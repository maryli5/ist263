function showPlanet(planet) {
  // Remove all active states
  const allElements = document.querySelectorAll('.active');
  allElements.forEach(el => el.classList.remove('active'));

  // Add active class to selected planet
  const planetElement = document.getElementById(planet);
  const textElement = document.getElementById(`${planet}Info`);
  const thumbElement = document.querySelector(`[onclick="showPlanet('${planet}')"]`);

  // Add active classes with delay for animation
  setTimeout(() => {
      planetElement.classList.add('active');
      textElement.classList.add('active');
      thumbElement.classList.add('active');
  }, 50);

  // Scroll to active thumbnail
  thumbElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
  });

  // Add planetary glow effect
  const glowColor = getComputedStyle(thumbElement).borderColor;
  planetElement.style.boxShadow = `0 0 50px ${glowColor}`;
  setTimeout(() => {
      planetElement.style.boxShadow = 'none';
  }, 1000);
}

// Initialize with Mercury
window.onload = () => {
  showPlanet('mercury');
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
      const planets = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune'];
      const currentIndex = planets.indexOf(document.querySelector('.planet-img.active').id);
      
      if(e.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % planets.length;
          showPlanet(planets[nextIndex]);
      }
      if(e.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + planets.length) % planets.length;
          showPlanet(planets[prevIndex]);
      }
  });
};