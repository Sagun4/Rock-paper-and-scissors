let userscore = 0;
let compscore = 0;
let puserscore = document.getElementById("user_score");
let pcompscore = document.getElementById("comp_score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".content");
const generate = () => {
  const options = ["rock", "paper", "scissors"];
  const rnd = Math.floor(Math.random() * 3);
  return options[rnd];
};
const drawGame = () => {
    console.log("draw");
    msg.innerText = `game was draw `;
    msg.style.backgroundColor = "#536493";
};
const showWinner = (userwin,compchoice)=>{
    if(userwin){
        userscore++;
        puserscore.innerText = userscore;
        console.log("you win");
        msg.innerText = `you won !!!comp chose ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        console.log("you lose");
        pcompscore.innerText = compscore;
        msg.innerText = `you lost ! comp chose ${compchoice}`; 
        msg.style.backgroundColor = "red";
    }
}
const game = (userchoice) => {
  console.log("user choice =", userchoice);
  const compchoice = generate();
  console.log("computer choice =",compchoice);
  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
    
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
    
      userWin = compchoice === "scissors" ? false : true;
    } else {
    
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, compchoice);
  }
  
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    game(userchoice);
  });
});
