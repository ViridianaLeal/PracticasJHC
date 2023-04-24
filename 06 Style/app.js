const cambiar=()=>{
    let div=document.querySelector("#item")
    let colorFondo=document.querySelector("#color").value;
    let colorTexto=document.querySelector("#colort").value;
    let colorBorde=document.querySelector("#colorb").value;
    let figura=document.querySelector("#figura").value;
    let br=(figura=="1")?"0%":"100%" 
    let texto=document.querySelector("#texto").value
    
    let alto=document.querySelector("#alto").value;
    let ancho=document.querySelector("#ancho").value;
    document.querySelector("#vancho").innerHTML=ancho
    document.querySelector("#valto").innerHTML=alto 
    div.style.width=ancho+"px"
    div.style.height=alto+"px"
    div.style.borderRadius=br
    div.style.background=colorFondo
    div.style.color=colorTexto
    div.style.borderColor=colorBorde
    div.innerHTML=texto

}