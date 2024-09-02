 let btn=document.querySelector("button");

 btn,addEventListener("click", async ()=>{
    
    let fact= await getfact();
    
    let p = document.querySelector("#result");
    p.innerText = fact; 
 })

let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/dog-api/#google_vignette"
async function getfact(){
    try{
        let res=await  axios.get(url);
      
      return res.data.fact;
      }catch(err){
         console.log("error",err);
         return "no data found"
      }
}

getfact();