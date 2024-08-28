
         //Guessing game
const max=prompt("Enter the max no.");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the no.");
while(true){
    if(guess=="quit"){
        console.log("quiting");
        break;
    }if(guess==random){
        console.log("Congrats! your write no!");
        break;
    }else{
        guess=prompt("Enter wrong no! please write no:")
    }
}

