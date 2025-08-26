function markPresent(btn) {
  btn.parentNode.style.backgroundColor = "#4CAF50";  
  btn.parentNode.innerHTML = "✔ حضور";  
}

function markAbsent(btn) {
  btn.parentNode.style.backgroundColor = "#F44336";  
  btn.parentNode.innerHTML = "✘ غياب";  
}