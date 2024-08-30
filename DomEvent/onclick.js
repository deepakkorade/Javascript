let btns=document.querySelectorAll("button");

for(btn of btns){
    btn.onclick=sayhello;
}
function sayhello(){
alert("hello!");
}
