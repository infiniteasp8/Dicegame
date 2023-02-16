var a = Math.random();
a*=6;
a=Math.floor(a+1);

var randomimagesource1 = "images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1);



var b = Math.random();
b*=6;
b=Math.floor(b+1);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+b+".png");


if(a>b){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

document.querySelector("h1").addEventListener("click",handleClicked);

function handleClicked()
{
    alert("You'r sweet");
}