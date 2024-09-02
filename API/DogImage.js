let btn=document.querySelector("button");
let url2 ="https://dog.ceo/api/breeds/image/random";

btn,addEventListener("click", async ()=>{
   let link = await getimage();
   let img= document.querySelector("#result");
   img.setAttribute("src" , link);
})


async function getimage(){
   try{
       let res=await  axios.get(url2);
     
     return res.data.message;
     }catch(err){
        console.log("error",err);
        return "no data found"
     }
}

getimage(); 