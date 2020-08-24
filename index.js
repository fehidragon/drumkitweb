// events with click
var numberDrummsButtons = document.querySelectorAll(".drum");
for (var i = 0; i < numberDrummsButtons.length; i++) {
    if (numberDrummsButtons) {
        document.querySelectorAll(".drum")[i].addEventListener('click', function () {
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
    }

}

// events with keyboard
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


// fuction to play sound based on the parameters( works with capslock )
function makeSound(entry) {
    switch (entry.toLowerCase()) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }

}

// animation on buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); // adicionar uma classe css
    //delay
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); // delay e chama a funcçao para remover a classe css

}