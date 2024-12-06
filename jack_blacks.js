
let your_balance = 200;

let win = 0;
let loss = 0;
let tie = 0;

let game_count = 0;


let dealerSum = 0;
let yourSum = 0;


let dealerAceCount = 0;
let yourAceCount = 0; 

let hidden;
let deck;

let canHit = true; //allows the player (you) to draw while yourSum <= 21

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    if (game_count > 0){
        let cardImg = document.createElement("img");
        let card = "BACK";
        cardImg.src = "./cards/" + card + ".png";
        cardImg.id = "hidden";
        document.getElementById("dealer-cards").append(cardImg);
    }
    hidden = deck.pop();
    console.log(deck);
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // console.log(hidden);
    // console.log(dealerSum);
    for (let l = 1; l < 2; l++){
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    console.log(dealerSum);
    }

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }

    console.log(game_count);
    console.log(yourSum);
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", dealer_add);
    document.getElementById("Next").addEventListener("click", keep_going);
    console.log(game_count);
    console.log(your_balance);
}

function hit() {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);

    if (reduceAce(yourSum, yourAceCount) > 21) { //A, J, 8 -> 1 + 10 + 8
        canHit = false;
    }

}

function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;

    let message = "";
    if (yourSum > 21) {
        message = "You Lose!";
        loss +=1
    }
    else if (dealerSum > 21) {
        message = "You win!";
        win +=1
    }
    //both you and dealer <= 21
    else if (yourSum == dealerSum) {
        message = "Tie!";
        tie +=1
    }
    else if (yourSum > dealerSum) {
        message = "You Win!";
        win +=1
    }
    else if (yourSum < dealerSum) {
        message = "You Lose!";
        loss +=1
    }
    console.log(win);
    console.log(loss);
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
    updateChart();
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { //A J Q K
        if (value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce(card) {
    if (card[0] == "A") {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}


function dealer_add(){
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    while (dealerSum < 17) {
        dealerSum = reduceAce(dealerSum, dealerAceCount);
        //<img src="./cards/4-C.png">
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
console.log(dealerSum);
if ( dealerSum >= 17){
    stay()
    }
}


function keep_going(){
    game_count +=1
    if (deck.length < 15){
        buildDeck();
        shuffleDeck();
    }
    dealerSum = 0;
    yourSum = 0;
    dealerAceCount = 0;
    yourAceCount = 0;
    hidden = "";
    canHit = true;
    const yourCards = document.getElementById("your-cards");
    while (yourCards.firstChild) {
        yourCards.removeChild(yourCards.firstChild);
    }

    const dealerCards = document.getElementById("dealer-cards");
    while (dealerCards.firstChild) {
        dealerCards.removeChild(dealerCards.firstChild);
    }

    document.getElementById("dealer-sum").textContent = dealerSum;
    document.getElementById("your-sum").textContent = yourSum;
    document.getElementById("results").innerText = "";

    startGame() 
}

function updateChart() {
    // Update the chart data with the latest win/loss values
    myChart.data.datasets[0].data = [loss, win, tie];
    myChart.update(); // Re-render the chart with updated data
}
var data = {
    labels: ['Losses', 'Wins', 'tie'],
    datasets: [{
        label: 'Win/Loss/tie Statistics',
        data: [loss, win, tie],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4
    }]
};


const ctx = document.getElementById('canvas').getContext('2d');
canvas.width = 10;  
canvas.height = 10; 

var config = {
    type: 'pie', 
    data: data,
};

const myChart = new Chart(ctx, config); 



document.addEventListener("DOMContentLoaded", () => {
    const gambleButton = document.querySelector('[data-bs-toggle="modal"]');
    const modalMessage = document.getElementById("message");

    gambleButton.addEventListener("click", () => {
        let x = Math.floor(Math.random() * 2);

        if (x === 0) {
            modalMessage.innerHTML = `
                <img src="/cards/gun_atscreen.png" alt="gun">
                <p>You lose, give me all your money!!!!</p>
            `;
            your_balance *= 0.2;
        } else if (x === 1) {
            modalMessage.innerHTML = `<p>You Win!!!!</p>`;
            your_balance *= 2;
        }

        console.log("Your balance:", your_balance); // Debugging balance update
    });

    const tryAgainButton = document.getElementById("try-again");
    tryAgainButton.addEventListener("click", () => {
        modalMessage.innerHTML = `<p>Let's try again!</p>`;
    });
});

    