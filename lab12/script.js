function showPlanet(planet) {
  // Remove all active states
  const activeElements = document.querySelectorAll('.active');
  activeElements.forEach(el => el.classList.remove('active'));

  // Add active classes with animation delay
  setTimeout(() => {
      document.getElementById(planet).classList.add('active');
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
  const planetElement = document.getElementById(planet);
  planetElement.style.boxShadow = '0 0 60px rgba(0, 255, 136, 0.4)';
  setTimeout(() => {
      planetElement.style.boxShadow = 'none';
  }, 800);
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