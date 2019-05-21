



var Martin = 76;

var Thomas = 85;

var Klaus = 65;

var Maria = 93;

var David = 81;

var sum = (David + Maria + Klaus + Thomas + Martin);

var average = sum / 5;

document.getElementById('text').innerHTML= average + " is the average";

if (average < 60)
{
document.getElementById('text').innerHTML= "F";

}

if (average < 70 && average >= 60)
{
document.getElementById('text').innerHTML= "D";
}

if (average < 80 && average >= 70)
{
document.getElementById('text').innerHTML= "C";
}

if (average < 90 && average >= 80)
{
document.getElementById('text').innerHTML= "B";
}

if (average >= 90)
{
document.getElementById('text').innerHTML= "A";
}




//< 80 C

//< 90 B

//< 100 A

