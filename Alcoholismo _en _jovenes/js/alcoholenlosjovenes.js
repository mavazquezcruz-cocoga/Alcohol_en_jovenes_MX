document.getElementById("myBtn").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

  // Abre el sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  // Cierra el sidebar
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }



