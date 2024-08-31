let gameSeq=[];
let userSeq=[];

let started= false;
 let level = 0;
 let btns=["red","yellow","purple","green"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){
    console.log("game started");
    started =true;

    levelUP();
    }
});

function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
}
function levelUP(){
    userSeq =[];
  level++;
  h2.innerText = `level ${level}`;

let randInx = Math.floor(Math.random() * 4);
let randColor = btns[randInx];
let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}
function checkAns(idx){
   
   if(userSeq[idx]=== gameSeq[idx]){
      if(userSeq.length=== gameSeq.length){
       setTimeout(levelUP,1000);
      }
   }else{
    h2.innerHTML = `Game over! Your score was <b> ${level}</b><br> press any key to start.  `;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },200)
    reset();
   }
}

function btnPress(){
    let btn=this;
    userflash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
}
let allbtns= document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq= [];
    userSeq=[];
    level =0;
}