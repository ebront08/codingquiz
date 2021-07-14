var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.querySelector(".quiz-container");
 [
  {
    "question": "When was Phi Beta Sigma Fraternity Incorporated founded?", 
    "answer": "", 
    "choices": {
      a: '1913',
      b: '1912',
      c: '2048',
      d: '1914'
    }, 
    correctAnswer: 'd'
  },
  {
    "question": "", 
    "answer": "", 
    "choices": []
  },

  {
    "question": "When was Omega Psi Phi Fraternity Incorporated founded?", 
    "answer": "", 
    "choices": {
      a: '1913',
      b: '1911',
      c: '2048',
      d: '1914'
    }, 
    correctAnswer: 'b'
  },
  {
    "question": "When was Delta Sigma Theta Sorority Incorporated founded?", 
      "answer": "", 
      "choices": {
        a: '1913',
        b: '1912',
        c: '2048',
        d: '1914'
      }, 
      correctAnswer: 'a'

  },

    {
      "question": "When was Phi Beta Sigma Fraternity Incorporated founded?", 
      "answer": "", 
      "choices": {
        a: '1913',
        b: '1912',
        c: '2048',
        d: '1914'
      }, 
      correctAnswer: 'd'

    }

      

      ];

      var quizContainer = document.getElementById('quiz');
      var resultsContainer = document.getElementById('results');
      var submitButton = document.getElementById('submit');

      
// (object mapping) Map through the quizQuestions array of object and add each question and it's choices to the htlm 
// add click functions to each individual choice that is added to the html element
// compare user answer to the answer that is stored 

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Add text for list items
li1.textContent = "1906  ";
li2.textContent = "1913  ";
li3.textContent = "1914  ";
li4.textContent = "1963  ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");

function renderQuestion () {
  quizContainer.style.visibility = "visible";

}







// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
  }
  
  // The startGame function is called when the start button is clicked
  function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderQuestion()
    startTimer()
  }
  
  // The winGame function is called when the win condition is met
  function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
  }
  
  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  // Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
