var temperature = Math.floor((Math.random() * 50) - 5);
if (temperature <= 5){





      

document.getElementById('text').innerHTML="the weather is cold";
document.getElementById('cold').innerHTML="<img width='100' height='100' src='cold.jpg'>";
}

else if (temperature>5 && temperature <= 20)

{
document.getElementById('text').innerHTML="the weather is moderate";
document.getElementById('moderate').innerHTML="<img id='imgeMod' width='600' height='200' src='moderate.jpg'>";
document.getElementById('imgeMod').style.border = "3px solid red";

}
else 
{ 
document.getElementById('text').innerHTML="the weather is hot";
document.getElementById('hot').innerHTML="<img src='hot.jpg'>";
}

