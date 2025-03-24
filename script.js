function getComputerChoice (){
    const choices=["rock","paper","scissors"];
    let choice=Math.floor(Math.random()*3);
    return choices[choice];

}
function getHumanChoice(){
    let choice=prompt("choisir: rock, paper or scissors:");
    return choice;
}
function PlayRound(cc,hc){
    if (cc=="rock"){
        switch(hc){
            case("rock"):
            console.log("tie!"); return[0,0]; break;
            case("paper"):
            console.log("paper beats rock!");
            return[0,1]; break;
            case("scissors"):
            console.log("rock beats scissors");
            return[1,0]; break;

        }
    }
    else if (cc=="paper"){
        switch(hc){
            case("paper"):
            console.log("tie!");return[0,0]; break;
            case("rock"):
            console.log("paper beats rock!");
            return[1,0]; break;
            case("scissors"):
            console.log(" scissors beats paper");
            return[0,1]; break;

        }
    }
    else {
        switch(hc){
            case("rock"):
            console.log("rock beats scissors");
            return[0,1]; break;
            case("paper"):
            console.log("scissors beats paper!");
            return[1,0]; break;
            case("scissors"):
            console.log("tie");return[0,0]; break;

        }
    }
}
function PlayGame(){
let humanScore=0;
let ComputerScore=0;
for (let i=0;i<5;i++){
    let hc=getHumanChoice();
    let cc=getComputerChoice();
    let [computer,human]=PlayRound(cc,hc);
    humanScore=humanScore+human;
    ComputerScore=ComputerScore+computer
}

if (humanScore > ComputerScore){
    alert("you win!!!!!");}
else if(humanScore < ComputerScore){
    alert("you lose!!!!");
}
else{
    alert("it's a tie!");
}
}
PlayGame();

