const generar = () => {
 let valor=document.querySelector("#n")
 let span=document.querySelector("#vn")
 let div=document.querySelector("#res")
  valor.oninput=()=>{
    span.innerHTML=valor.value;
    n=parseInt(valor.value);
    divsHTML="";
    for(i=1;i<=n;i++){
      divsHTML+=   "<div class='cajita'>"+i+"</div>";
    }
    div.innerHTML=divsHTML;
  }
  
}