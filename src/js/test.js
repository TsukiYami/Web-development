// script.js
function updateHrWidth() {
    const headline = document.querySelector("h4"); // Änderung hier
    const customHr = document.getElementById("custom-hr");
    
    const headlineWidth = headline.offsetWidth;
    customHr.style.width = `${headlineWidth}px`;
  }
  
  updateHrWidth();
  window.addEventListener("resize", updateHrWidth);
  