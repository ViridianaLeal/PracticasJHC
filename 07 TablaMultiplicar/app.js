const generar=()=>{
    let n=parseInt(document.querySelector("#n").value);
    document.querySelector("#vn").innerHTML=n
    let div=document.querySelector("#res");
    div.innerHTML="<img src='spinner.gif' width='400px' height='200px'>";
    setTimeout(()=>{
    let tablaHTML="<table>";
    for(i=1;i<10;i++){
      tablaHTML+="<tr><td>"+n+"x"+i+"="+(i*n)+"</td></tr>";
    }
    div.innerHTML=tablaHTML+"</table>";
  },2000);
  const borrar=()=>{
    let borrarT=document.querySelector("#res").innerHTML="";
   } 
  } 