let numero=document.querySelector("#numero");
let menos=document.querySelector("#menos")
let mas=document.querySelector("#mas")
let reset=document.querySelector("#reset")
let n=0;

menos.onclick=()=>{n--;cambiar()}
reset.onclick=()=>{n=0;cambiar()}
mas.onclick=()=>{n++;cambiar()}

const cambiar=()=>{
    numero.innerHTML=n
    if(n==0){
        numero.style.color="black"
    }else if(n>0){
        numero.style.color="green"
    }else{
        numero.style.color="red"
    }
}