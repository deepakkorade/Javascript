let url = "https://catfact.ninja/fact";

fetch(url)
.then((Res)=>{
    
   return Res.json();
    })
    .then((data)=>{
        console.log("data1= " ,data.fact);
        return fetch(url);
})
.then((Res)=>{
   return Res.json();
})
.then((data2)=>{
    console.log("data2 =",data2.fact);
})
.catch((err)=>{
    console.log("Error",err);
})