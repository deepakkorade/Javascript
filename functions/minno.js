let arr=[4,5,7,4,8,1,2,9,21];

let min=arr.reduce((min,el)=>{
if( min>el){
    return el;}
else{ return min}
})
console.log(min);