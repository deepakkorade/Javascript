let todo=[];
let req=prompt("enter your request");
while(true){
    if(req =="quit"){
        console.log("quiting app");
        break;
    
     }
    if(req =="list"){
        console.log("------");
        for(let i=0;i<todo.length;i++){
                console.log(i,todo[i]);
        }
        console.log("------");
    }
    else if(req =="add"){
        let task=prompt("add you entity");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("delete you entity");
        todo.splice(idx,1);
        console.log("task delete");
    }
    else{
        console.log("wrong you entity");
    }
   

    }