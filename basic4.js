var temperature = Math.floor((Math.random() * 50) - 5);
if (temperature <= 5){

document.getElementById('text').innerHTML="the weather is cold";
document.getElementById('cold').innerHTML="<img src='cold.jpg'>";
}

else if (temperature>5 && temperature <= 20)

{
document.getElementById('text').innerHTML="the weather is moderate";
document.getElementById('moderate').innerHTML="<img src='moderate.jpg'>";

}
else 
{ 
document.getElementById('text').innerHTML="the weather is hot";
document.getElementById('hot').innerHTML="<img src='hot.jpg'>";
}