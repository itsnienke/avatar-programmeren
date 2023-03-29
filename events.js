var secondsRemaining = 60;
var countdownInterval = setInterval(updateCountdown, 1000);
var kataraAudio= new Audio ("sounds/Voicy_How can you be so infuriating_.mp3")
var zukoAudios = new Audio ("sounds/Voicy_That’s rough, buddy.mp3")

const zukoBar = document.getElementById("zukoBar");
const kataraBar = document.getElementById("kataraBar");
const waterbendingButton = document.getElementById("waterbendingButton");
const bloodbendingButton = document.getElementById("bloodbendingButton");
const healButton = document.getElementById("healButton");
const messageLost = document.getElementById("messageLost");
const messageWon = document.getElementById("messageWon");
const lost = document.getElementById("lost");

let width = 20;


waterbendingButton.addEventListener("click", waterbendingButtonClick);


bloodbendingButton.addEventListener("click", bloodbendingButtonClick);

healButton.addEventListener("click", heal);

function waterbendingButtonClick() {
    waterbending()
}

function bloodbendingButtonClick() {
    bloodbending()
    setTimeout(zukoReactionBlood, 1000);
}

function disableButton() {
  waterbendingButton.disabled = true;
  bloodbendingButton.disabled = true;
  healButton.disabled = true;

}


/* COUNTDOWN */

function updateCountdown() {
	if (secondsRemaining > 0) {
		secondsRemaining--;
		document.getElementById("countdown").innerHTML = secondsRemaining;
	} else {
		clearInterval(countdownInterval);
		document.getElementById("countdown").innerHTML = "YOU LOST";
    disableButton();
	} if (width < 0)
  remove('updateCountdown'())
}



    
/* WATER BENDING ATTACK */

function waterbending() {
    width -= Math.floor(Math.random() * (7 - 2) + 2); // WILLEKEURIG GEKOZEN HOEVEEL DMG HET DOET
    if (width <= 0) {
        width = 0
        messageWon.textContent = 'YOU WIN';
        kataraAudio.play() // deuntje voor als je verliest https://gomakethings.com/how-to-play-a-sound-with-javascript/
        disableButton();
        clearInterval(countdownInterval)
    }

    zukoBar.style.width = width + "vw";
    almostDead()

    if (width > 0) {
        setTimeout(zukoReaction, 1000);
    }
}

function zukoReaction() {
    width -= Math.floor(Math.random() * (7 - 2) + 2); // WILLEKEURIG GEKOZEN HOEVEEL DMG HET DOET
    if (width <= 0) {
        width = 0
        messageLost.textContent = 'YOU LOST';
        zukoAudios.play()
        clearInterval(countdownInterval)
        disableButton();
    }

    kataraBar.style.width = width + "vw";
    almostDead()

}


/* BLOOD BENDING SPECIAL ATTACK */

function bloodbending() {
    const randomWidth = Math.random() < 0.5 ? 9 : 2; // WILLEKEURIG GEKOZEN OF HET 9 OF 2 DMG DOET
    width -= randomWidth;
    if (width < 0) {
        width = 0
        messageWon.textContent = 'YOU WIN';
        kataraAudio.play()
        clearInterval(countdownInterval)
        disableButton();
    }
    zukoBar.style.width = width + "vw";
    almostDead()

    if (width > 0) {
      setTimeout(zukoReactionBlood, 1000);
  }
}

function zukoReactionBlood() {
    const randomWidth = Math.random() < 0.5 ? 9 : 2;  
    if (width < 0) {
        width = 0
        messageLost.textContent = 'YOU LOST';
        zukoAudios.play()
        clearInterval(countdownInterval)
        disableButton();
    }
    kataraBar.style.width = width + "vw";
    almostDead()

}




/* HEALING */

function heal() {
  if (width < 80) { // HEALT NIET ALS DE BAR AL VOL IS
    width += 10;
    if (width > 100) {
        width = 100;
    }
    kataraBar.style.width = width + "vw";
    
  }
  healButton.removeEventListener("click", heal) // HAALT DE HEAL WEG NA 1X GEBRUIKEN
  
}

function almostDead (){
    if (width <= 10){
        kataraBar.style.backgroundColor = "#820909";
        zukoBar.style.backgroundColor = "#820909";
    }

    else{
        kataraBar.style.backgroundColor = "#1EC02E";
        zukoBar.style.backgroundColor = "#1EC02E";
    }

    console.log(width)
}