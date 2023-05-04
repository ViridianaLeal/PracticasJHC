const generar = () => {
    let n = parseInt(document.querySelector("#n").value);
    document.querySelector("#vn").innerHTML = n
    let div = document.querySelector("#res");
    
    div.innerHTML = "<img src='spinner.gif' width='400px' height='200px'>";
    setTimeout(() => {
      let r=Math.sqrt(n);
      div.innerHTML=r.toFixed(2);
    }, 2000);
    const borrar = () => {
      let borrarT = document.querySelector("#res").innerHTML = "";
    }
  }