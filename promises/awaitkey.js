let h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color change to ${color}`);
                resolve("color change");
            
    }, delay);
    })
}
async function demo(){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("green",1000);
    changecolor("pink",1000);
}