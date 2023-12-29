var inputString = [];
var randomString = [];
var randomNumber;
var input;
var color = ["red","blue","green","yellow"];
var randomColor;

// makeSound("red");
// generateRandomColor();
$(".btn").click(function(event){
    var colorPressed = event.currentTarget.attributes[1].nodeValue;
    // if((event.currentTarget.attributes[1].nodeValue) === "red"){
    //     console.log("Yups");
    // }
    // console.log(event.currentTarget.attributes[1].nodeValue);
    makeSound(colorPressed);
    buttonAnimation(colorPressed);

    setTimeout(function() {
        generateRandomColor();
    
    }, 1000);
    
})

function generateRandomColor() {
    randomColor = color[(Math.floor(Math.random()*4))];
    
    console.log(randomColor);
    randomString.push(randomColor);
    console.log(randomString);
    makeSound(randomColor);
    buttonAnimation(randomColor);
}

function makeSound(key) {
    switch (key) {
        case "blue": 
        $("audio").attr("src","./sounds/blue.mp3");
        var blueSound = new Audio("./sounds/blue.mp3")
        blueSound.play();

            break;

        case "green": 
        var greenSound = new Audio("./sounds/green.mp3")
        greenSound.play();
            break;

        case "red": 
        var redSound = new Audio("./sounds/red.mp3")
        redSound.play();
            break;

        case "yellow": 
        var yellowSound = new Audio("./sounds/yellow.mp3")
        yellowSound.play();
            break;

        case "wrong": 
        var wrongSound = new Audio("./sounds/wrong.mp3")
        wrongSound.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation (colorPressed){
    $("#" + colorPressed).addClass("pressed");
    // console.log("#" + colorPressed);

    setTimeout(function() {
        $("#" + colorPressed).removeClass("pressed");
    }, 100);
}