
        /*Score tracking*/
        humanScore = 0
        computerScore = 0
    
        /*Introduction eeeeeeeeeeeeeeeeeeeeeeeeeeeeee*/
        console.log("You will be playing Rock, Paper, Scissors!")

        let HumanChoice = "";



        function Logic() {
            getComputerChoice=Math.random()
    
            const computer = document.querySelector(".computer");
            const results = document.querySelector(".results");

            /*Getting the Computer Choice*/
            ComputerChoice = ""
            if (0 <= getComputerChoice && getComputerChoice < 0.33) {
                ComputerChoice = "rock";
            } else if (0.33 <= getComputerChoice && getComputerChoice < 0.66) {
                ComputerChoice = "paper";
            } else if (0.66 <= getComputerChoice && getComputerChoice <= 1) {
                ComputerChoice = "scissors";
            }


            if (ComputerChoice == "rock" && HumanChoice == "rock") {
                computer.textContent="Computer chose rock, it's a draw!";
            } else if (ComputerChoice == "rock" && HumanChoice == "paper") {
                computer.textContent="Computer chose rock, you win!";
                humanScore++;
            } else if (ComputerChoice == "rock" && HumanChoice == "scissors") {
                computer.textContent="Computer chose rock, you lose!";
                computerScore++;
            } else if (ComputerChoice == "paper" && HumanChoice == "rock") {
                computer.textContent="Computer chose paper, you lose!";
                computerScore++;
            } else if (ComputerChoice == "paper" && HumanChoice == "paper") {
                computer.textContent="Computer chose paper, it's a draw!";
            } else if (ComputerChoice == "paper" && HumanChoice == "scissors") {
                computer.textContent="Computer chose paper, you win!";
                humanScore++;
            } else if (ComputerChoice == "scissors" && HumanChoice == "rock") {
                computer.textContent="Computer chose scissors, you win!";
                humanScore++;
            } else if (ComputerChoice == "scissors" && HumanChoice == "paper") {
                computer.textContent="Computer chose scissors, you lose!";
                computerScore++;
            } else if (ComputerChoice == "scissors" && HumanChoice == "scissors") {
                computer.textContent="Computer chose scissors, it's a draw!";
            }

            /*Printing cumulative score*/
            results.textContent=`Human Score: ${humanScore}\u00A0\u00A0\u00A0|\u00A0\u00A0Computer Score: ${computerScore}`;

        }
    
        const rockDiv = document.querySelector(".rock")
        rockDiv.addEventListener('click', function() {
            HumanChoice = "rock";
            Logic();
        });
    
        const paperDiv = document.querySelector(".paper")
        paperDiv.addEventListener('click', function() {
            HumanChoice = "paper";
            Logic();
        });

        const scissorsDiv = document.querySelector(".scissors")
        scissorsDiv.addEventListener('click', function() {
            HumanChoice = "scissors";
            Logic();
        });