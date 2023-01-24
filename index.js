document.getElementById('boton1').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("sob-mi").style.display = "grid";
    document.getElementById("sob-mi").style.textAlign = "center";
    document.getElementById("sob-mi").style.fontWeight = "100"
}

document.getElementById('boton2').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("education").style.display = "grid";
    document.getElementById("education").style.textAlign = "center";
    document.getElementById("education").style.fontWeight = "100"
}


document.getElementById('boton3').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("exp-lab").style.display = "grid";
    document.getElementById("exp-lab").style.textAlign = "center";
    document.getElementById("exp-lab").style.fontWeight = "100"
}


document.getElementById('boton4').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("contact").style.display = "grid";
    document.getElementById("contact").style.textAlign = "center";
    document.getElementById("contact").style.fontWeight = "100"
}

document.getElementById('boton1, boton2, boton3, boton4').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("sob-mi, education, contact, exp-lab").style.textAlign = "center";
}



