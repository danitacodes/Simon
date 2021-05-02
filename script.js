let buttonColors = ["teal", "green", "peach", "salmon"];
let gamePattern =[];

let tealButton = new Audio();
tealButton.src = "tealsound.mp3";


function newSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
};


$("#teal").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
