

document.getElementById("date").innerHTML =
  " التاريخ اليوم: " + new Date().toLocaleDateString();

  window.onload = function() {
    
    if (!sessionStorage.getItem("welcomeShown")) {
        alert(" أهلا بك في Schoolmate زميلك في المدرسة "); 
        sessionStorage.setItem("welcomeShown", "true"); 
    }
};
