let res=document.querySelector("#res")

const suma=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  csuma=n1+n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Suma: ${csuma}</h2>`
}
const resta=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cresta=n1-n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Resta: ${cresta}</h2>`
}
const multi=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cmulti=n1*n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Multiplicacion: ${cmulti}</h2>`
}
const divi=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  cdiv=n1/n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>División: ${cdiv}</h2>`
}