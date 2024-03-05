let score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function updateStatusElement(userPick, computerPick) {
    document.querySelector(
      ".js-paragraph2"
    ).innerHTML = `you picked <img src="pictures/${userPick}.png" alt="Rock" style="width: 50px;"></img> ---
            computer picked <img src="pictures/${computerPick}.png" alt="Rock" style="width: 50px;">`;
}
function updateScoresElement() {
    document.querySelector(
      ".js-paragraph3"
    ).innerHTML = `Wins : ${score.wins} | Ties : ${score.ties} | Losses : ${score.losses}`;
    if (!document.getElementById("reset-button").style.opacity ||
    document.getElementById("reset-button").style.opacity === "0") {
        document.getElementById("reset-button").style.opacity = "1";
        document.getElementById("reset-button").style.cursor = "pointer";
    }
}
function pick(userPick) {
    let computerPick;
    const randomNumber = Math.random();
    score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      ties: 0,
    };;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerPick = 'rock';
    }
    if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerPick = 'paper';
    }
    if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerPick = 'scissors';
    }
    if (userPick === 'rock') {
        if (computerPick === 'rock') {
            document.querySelector(".js-paragraph1").innerHTML = "Tie.";
            score.ties+= 1;
        }else if (computerPick === 'paper') {
            document.querySelector(".js-paragraph1").innerHTML = "you lost ...";
            score.losses+= 1;
        } else {
            document.querySelector(".js-paragraph1").innerHTML = "you WIN !";
            score.wins+= 1;
        }
    }
    if (userPick === 'paper') {
        if (computerPick === 'paper') {
            document.querySelector(".js-paragraph1").innerHTML = "Tie.";
            score.ties+= 1;
        }else if (computerPick === 'scissors') {
            document.querySelector(".js-paragraph1").innerHTML = "you lost ...";
            score.losses+= 1;
        } else {
            document.querySelector(".js-paragraph1").innerHTML = "you WIN !";
            score.wins++;
        }
    }
    if (userPick === 'scissors') {
        if (computerPick === 'scissors') {
            document.querySelector(".js-paragraph1").innerHTML = "Tie.";
            score.ties+= 1;
        }else if (computerPick === 'rock') {
            document.querySelector(".js-paragraph1").innerHTML = "you lost ...";
            score.losses+= 1;
        } else {
            document.querySelector(".js-paragraph1").innerHTML = "you WIN !";
            score.wins+= 1;
        }
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateStatusElement(userPick, computerPick);
    updateScoresElement()
}

function resetScores() {
    score = {
      wins: 0,
      losses: 0,
      ties: 0,
    };
    updateScoresElement();
    document.querySelector(".js-paragraph1").innerHTML = '';
    document.querySelector(".js-paragraph2").innerHTML = '';
    document.querySelector(".js-paragraph2").innerHTML = '';
    document.getElementById("reset-button").style.opacity = "0";
    document.getElementById("reset-button").style.cursor = "";
    localStorage.removeItem('score')
}