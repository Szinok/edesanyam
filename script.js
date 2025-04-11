document.getElementById('start-game').addEventListener('click', () => {
    // Az első jelenet átirányítása
    localStorage.setItem('currentMap', 'scene1.html'); // Elmentjük, hogy az első térképen kezdjük
    window.location.href = 'scene1.html';
  });
  
  document.getElementById('continue-game').addEventListener('click', () => {
    // Ellenőrizzük, hogy van-e elmentett térkép
    const savedMap = localStorage.getItem('currentMap');
    
    if (savedMap) {
      // Ha van elmentett térkép, átirányítunk arra
      window.location.href = savedMap;
    } else {
      // Ha nincs elmentett térkép, átirányítunk a failc.html-re
      window.location.href = 'failc.html';
    }
  });
  
  document.getElementById('memories').addEventListener('click', () => {
    window.location.href = 'memories.html'; // Emlékek oldal
  });
  
  document.getElementById('how-to-play').addEventListener('click', () => {
    window.location.href = 'how-to-play.html'; // Hogyan játszunk oldal
  });

  document.getElementById("clear-storage").addEventListener("click", () => {
    // Törölje az összes adatot a localStorage-ból
    localStorage.clear();
    alert("A az emlékek és a játékok kerültek!");
  });
  
  