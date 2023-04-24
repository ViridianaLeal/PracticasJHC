const cambiar=()=>{
    let div=document.querySelector("#item")
    let colorFondo=document.querySelector("#color").value;
    let colorTexto=document.querySelector("#colort").value;
    let colorBorde=document.querySelector("#colorb").value;
    let texto=document.querySelector("#texto").value
    let figura=document.querySelector("#figura").value;
    let alto=document.querySelector("#alto").value;
    let ancho=document.querySelector("#ancho").value;
    let br=(figura=="1")?"0%":"100%" 
    div.style.borderRadius=br
    div.style.background=colorFondo
    div.style.color=colorTexto
    div.style.borderColor=colorBorde
    div.innerHTML=texto
    div.style.width=ancho+"px"
    div.style.height=alto+"px"

}