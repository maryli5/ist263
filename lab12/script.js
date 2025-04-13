function showPlanet(planet) {
  // Remove active classes
  document.querySelectorAll('.planet-img, .planet-text, .thumbnail').forEach(el => {
      el.classList.remove('active');
  });

  // Add active classes to selected planet
  document.getElementById(planet).classList.add('active');
  document.getElementById(`${planet}Info`).classList.add('active');
  document.querySelector(`[onclick="showPlanet('${planet}')"]`).classList.add('active');

  // Scroll to selected thumbnail
  const activeThumb = document.querySelector(`.thumbnail.active`);
  activeThumb.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
  });
}

// Initialize with Mercury
window.onload = () => showPlanet('mercury');