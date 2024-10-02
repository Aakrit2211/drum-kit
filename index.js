document.querySelectorAll(".key").forEach(element => {
    element.addEventListener("click", function () {
        var btnhtml = this.querySelector("span").innerHTML;

        makeSound(btnhtml);
    });

});

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});


function makeSound(key) {
    switch (key.toLowerCase()) {
        case "w":
            var aud = new Audio('./sounds/tom-1.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "a":
            var aud = new Audio('./sounds/tom-2.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "s":
            var aud = new Audio('./sounds/tom-3.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "d":
            var aud = new Audio('./sounds/tom-4.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "j":
            var aud = new Audio('./sounds/crash.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "k":
            var aud = new Audio('./sounds/kick-bass.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        case "l":
            var aud = new Audio('./sounds/snare.mp3');
            aud.volume = 0.5;
            aud.play();
            break;

        default:
            console.log("No sound for this key");
            break;
    }
}