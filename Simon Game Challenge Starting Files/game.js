var userClickedPattern = [];
var gamePattern = [];
var buttonColurs = ["red", "blue", "green", "yellow"];
var gameStart = false;
var level =0;


    $(document).keypress(function(){
        if(!gameStart){
        nextSequence();
        // console.log("yup");
        gameStart = true;}

    });

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length -1);
})
function nextSequence(){
    userClickedPattern = [];
    level++;

    randomNumber = Math.floor(Math.random()*4)
    var randomChosenColour = buttonColurs[randomNumber];
    gamePattern.push(randomChosenColour);

    // console.log(randomChosenColour);
    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    $("h1").text("Level "+ level);


}
function playSound(name) {
    var audio = new Audio("./sounds/"+name+ ".mp3");
    audio.play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
function checkAnswer(CurrentLevel){
    if(userClickedPattern[CurrentLevel] === gamePattern[CurrentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }else{
        console.log("Fail");
        $("h1").text("GameOver Press a Key to restart the game");
        startOver();
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 1000);
    }

}

function startOver(){
    gameStart = false;
    level = 0;
    gamePattern = [];
    

}