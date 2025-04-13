let currentPlanet = null;

function showPlanet(planet) {
    // Hide current planet and show clicked thumbnail
    if (currentPlanet) {
        document.getElementById(currentPlanet).style.display = 'none';
        document.querySelector(`[onclick="showPlanet('${currentPlanet}')"]`).style.display = 'inline-block';
    }

    // Show new planet and hide its thumbnail
    document.getElementById(planet).style.display = 'block';
    document.querySelector(`[onclick="showPlanet('${planet}')"]`).style.display = 'none';
    currentPlanet = planet;
}

// Initialize with Mars visible
window.onload = () => {
    document.getElementById('mars').style.display = 'block';
    currentPlanet = 'mars';
    document.querySelector(`[onclick="showPlanet('mars')"]`).style.display = 'none';
}