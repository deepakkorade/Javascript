const favmovie="avtar";
let guess=prompt("enter your movies name");

while((guess!=favmovie )&&(guess!="quit")){
    guess=prompt("wrong guess. place try again!");
}
if(guess == favmovie){
    console.log("congrats!");

}else{
    console.log("quit");
}