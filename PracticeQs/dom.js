let para1=document.createElement('p');
para1.innerText="Hey I am red!";
document.querySelector('body').append(para1);

para1.classList.add("red");

let h3=document.createElement('h3');
h3.innerText="Hey I'm a blue!";
document.querySelector('body').append(h3);

h3.classList.add("blue");

let div=document.createElement('div');
div.innerText="Hey I'm div";
document.querySelector('body').append(div);

h3.classList.add("div");