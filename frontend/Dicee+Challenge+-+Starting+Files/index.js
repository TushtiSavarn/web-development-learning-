// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the image path based on the random number
var imagePath = "dice" + randomNumber1 + '.png';

var randomImage="images/"+imagePath;
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imagepath="dice"+randomNumber2+".png"
var randomImage2="images/"+imagepath;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2)

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=" 🙌Player 1 wins"
    }
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🙌"
}
else{
    document.querySelector("h1").innerHTML="Ties both got 1 points"
}
