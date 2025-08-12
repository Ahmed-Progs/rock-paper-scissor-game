// Function to start looping idle/default videos
function startIdleVideos() {
    const leftVideo = document.getElementById("leftVideo");
    const rightVideo = document.getElementById("rightVideo");

    leftVideo.src = "./assets/videos/LDefault.mp4";
    rightVideo.src = "./assets/videos/RDefault.mp4";

    leftVideo.loop = true;
    rightVideo.loop = true;

    leftVideo.play();
    rightVideo.play();
}

// Play choice videos once and stop idle loop
function playChoice(playerChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Capitalize for file naming
    const playerFile = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    const computerFile = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    const leftVideo = document.getElementById("leftVideo");
    const rightVideo = document.getElementById("rightVideo");

    // Stop looping
    leftVideo.loop = false;
    rightVideo.loop = false;

    // Set choice videos
    leftVideo.src = `./assets/videos/L${playerFile}.mp4`;
    rightVideo.src = `./assets/videos/R${computerFile}.mp4`;

    leftVideo.play();
    rightVideo.play();

    // Wait for both videos to finish before checking winner
    let videosEnded = 0;
    function checkIfBothEnded() {
        videosEnded++;
        if (videosEnded === 2) {
            determineWinner(playerChoice, computerChoice);
        }
    }

    leftVideo.onended = checkIfBothEnded;
    rightVideo.onended = checkIfBothEnded;
}

// Lets play button
document.getElementById("letsPlayBtn").addEventListener("click", function () {
    document.querySelector(".gameArea").scrollIntoView({
        behavior: "smooth"
    });
});

function determineWinner(player, computer) {
    
    const header = document.querySelector(".header h1");

    //player Scenerios
    // Rock cases
    if (player === "rock" && computer === "rock" ) {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (player === "rock" && computer === "paper") {
        header.textContent = "💻 Computer Wins! 💻";
    } 
    else if (player === "rock" && computer === "scissor") {
        header.textContent = "🎉 You Win! 🎉";
    }
    
    // Paper cases
    else if (player === "paper" && computer === "paper") {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (player === "paper" && computer === "rock") {
        header.textContent = "🎉 You Win! 🎉";
    } 
    else if (player === "paper" && computer === "scissor") {
        header.textContent = "💻 Computer Wins! 💻";
    }
    
    // Scissor cases
    else if (player === "scissor" && computer === "scissor") {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (player === "scissor" && computer === "paper") {
        header.textContent = "🎉 You Win! 🎉";
    } 
    else if (player === "scissor" && computer === "rock") {
        header.textContent = "💻 Computer Wins! 💻";
    }

    //computer Scenerios
        // Rock cases
    else if(computer === "rock" && player === "rock") {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (computer === "rock" && player === "paper") {
        header.textContent = "🎉 You Win! 🎉";
    } 
    else if (computer === "rock" && player === "scissor") {
        header.textContent = "💻 Computer Wins! 💻";
    }
    
    // Paper cases
    else if (computer === "paper" && player === "paper") {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (computer === "paper" && player === "rock") {
        header.textContent = "💻 Computer Wins! 💻";
    } 
    else if (computer === "paper" && player === "scissor") {
        header.textContent = "🎉 You Win! 🎉";
    }
    
    // Scissor cases
    else if (computer === "scissor" && player === "scissor") {
        header.textContent = "It's a Tie! Try Again.";
    } 
    else if (computer === "scissor" && player === "paper") {
        header.textContent = "💻 Computer Wins! 💻";
    } 
    else if (computer === "scissor" && player === "rock") {
        header.textContent = "🎉 You Win! 🎉";
    }

    else{
        header.textContent = "Invalid!";
    }

}
// Start idle videos when page loads
window.onload = startIdleVideos;
