
document.onkeydown = function(event) {

  if (event.code === "Space") {
    
    document.getElementById("color1").style.backgroundColor = getRandomColor();
    document.getElementById("color2").style.backgroundColor = getRandomColor();
    document.getElementById("color3").style.backgroundColor = getRandomColor();
    document.getElementById("color4").style.backgroundColor = getRandomColor();
    document.getElementById("color5").style.backgroundColor = getRandomColor();
    document.getElementById("color6").style.backgroundColor = getRandomColor();
    document.getElementById("color7").style.backgroundColor = getRandomColor();
    document.getElementById("color8").style.backgroundColor = getRandomColor();
    document.getElementById("color9").style.backgroundColor = getRandomColor();
    document.getElementById("color10").style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
    var letter= "0123456789ABCDEF";
    var color = "#";
    for(var i = 0;i<6;i++){
        color+=letter[Math.floor(Math.random()*16)];

    }
    return color
}