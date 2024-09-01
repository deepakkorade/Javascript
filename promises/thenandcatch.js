function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internatespeed = Math.floor(Math.random()*10)+1;
        if (internatespeed > 4){
            resolve("success :data was saved");

        }else{
            reject("failure: weak conection");
        }

    });
}

savetoDB("apna college")
.then(()=>{
        console.log("data1 saved");
        return savetoDB("hello word")
      })
       .then(()=>{
        console.log("data2 is saved");
        return savetoDB("deepak korade")
       })
       .then(()=>{
         console.log("data3 saved");
                })
       .catch(()=>{
        console.log("promises was reject!");

                });

    