let userScore=0;
let compScore=0;
let mag=document.querySelector("#msg");
let userScr=document.querySelector("#user-score");
let compScr=document.querySelector("#comp-score");
const drawGame=()=>{
    msg.innerText="game was draw.";
    msg.style.backgroundColor="#081b31";
    console.log("game was draw.");
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScr.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
        console.log("you win!");
        
    } else{
        compScore++;
        compScr.innerText=compScore;
        msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("you lose");
    }
}
const playGame =(userChoice)=>{
    console.log("userChoice=",userChoice)
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);
    if (userChoice===compChoice) {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        } else if(userChoice ==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const choices= document.querySelectorAll(".choice")
choices.forEach((choice) => { 
    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id");
        playGame(userChoice);
        
    })
})