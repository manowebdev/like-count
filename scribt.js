let plus=document.getElementById("plus");
let text=document.getElementById("text");
let minus=document.getElementById("minus");
let count=0;
function ubtatecount(){
text.innerText=count;
}
plus.addEventListener("click",()=>{
    count++;
    ubtatecount()
})
minus.addEventListener("click",()=>{
    count--;
    ubtatecount()
})
