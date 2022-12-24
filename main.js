let RDNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resultAreaImg = document.querySelector(".main-img");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus", function(){userInput.value = "";});

function pickRandomNum(){
    RDNum = Math.floor(Math.random()*100)+1;
    console.log("정답", RDNum);
}

function play(){
   let userValue =  userInput.value;
   
   if(userValue < 1 || userValue > 100){
    resultArea.textContent = "1과 100 사이에 숫자를 입력하시오.";

    return;
   }

   if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다.";

    return;
   }

   chances -- ;
   chanceArea.textContent = `남은 기회: ${chances}회`
   
   if(userValue < RDNum){
    resultArea.textContent = "Up!";
    resultAreaImg.src =
      "https://media1.giphy.com/media/l0HlOaQcLJ2hHpYdy/giphy.gif?cid=ecf05e471g6ej4j5atdc6s8yze00qt4juv47g2d1q4agyq2y&rid=giphy.gif&ct=g";
   }
   else if(userValue > RDNum){
    resultArea.textContent = "Down!";
    resultAreaImg.src =
    "https://media3.giphy.com/media/dBsZ5ChSYEz9wruEU2/giphy.gif?cid=ecf05e47aqm58f62xg1prbakv39m0srqdpfa6rodgx9sc9xp&rid=giphy.gif&ct=g"
   }
   else{
    resultArea.textContent = "Congratulations!!";
    resultAreaImg.src =
    "https://media2.giphy.com/media/qo89zWPnfaOK4Ng74U/giphy.gif?cid=ecf05e47vs96waze3kxtmzbrdv8oy9d060zlogi1cymn26nk&rid=giphy.gif&ct=g"
    gameOver = true;
   }

   history.push(userValue);
   console.log(history)

   if(chances < 1){
    gameOver = true;
   }
   if(gameOver == true){
    playButton.disabled = true;
   }

   if(chances == 0){
    resultAreaImg.src =
    "https://media1.giphy.com/media/A1SxC5HRrD3MY/giphy.gif?cid=ecf05e47aj5mxhufkj0ylcnqacsxsy7h7x48duxv9163f3af&rid=giphy.gif&ct=g"
    resultArea.textContent = "실패!"
   }
}

function reset(){
    userInput.value = "";
    gameOver = false;
    playButton.disabled = false;
    chances = "5";
    chanceArea.textContent = `남은 기회: ${chances}회`
    history = [];
    resultAreaImg.src = "https://media2.giphy.com/media/An7elHGhaAfekLMgdS/giphy.gif?cid=ecf05e47fxcil2fqvwmtxry2cn5si5b0fu80u3d43wvswlgm&rid=giphy.gif&ct=g"
    resultArea.textContent = "결과 표시";
    pickRandomNum();
}

pickRandomNum();