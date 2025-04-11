document.addEventListener("DOMContentLoaded", () => {
  const memoriesList = document.getElementById("memories-list");

  // Ellenőrizzük, hogy van-e mentett emlék
  const memories = JSON.parse(localStorage.getItem("memories")) || [];

  if (memories.length === 0) {
    memoriesList.innerHTML = "<p>Még nincsenek emlékeid...</p>";
  } else {
    // Ha vannak emlékek, kiírjuk őket stílusosan
    memories.forEach((memory, index) => {
      const memoryElement = document.createElement("div");
      memoryElement.classList.add("memory-item");
      memoryElement.innerHTML = `
        <div class="memory-index">Emlék #${index + 1}</div>
        <div class="memory-text">${memory}</div>
      `;
      memoriesList.appendChild(memoryElement);
    });
  }
});
