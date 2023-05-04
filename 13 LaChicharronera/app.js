let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let div=document.querySelector("#valores")
let res=document.querySelector("#res")

a.oninput=()=>{valores()} 
b.oninput=()=>{valores()}
c.oninput=()=>{valores()}


const valores =()=>{
  let va =parseInt(a.value)
  let vb =parseInt(b.value)
  let vc =parseInt(c.value)
  
  document.querySelector("#va").innerHTML =va
  document.querySelector("#vb").innerHTML =vb
  document.querySelector("#vc").innerHTML =vc
  
  
 
  
  div.innerHTML=(va+" x<sup>2</sup> "+vb+" x "+vc+" = 0 ");
		let valor=(vb*vb)-(4*va*vc);
		if(valor>0){
			x1=(-vb+Math.sqrt(valor))/(2*va);
			x2=(-vb-Math.sqrt(valor))/(2*va);
			res.innerHTML=("X1="+x1.toFixed(2)+" X2="+x2.toFixed(2));
		}else if(valor==0) {
			x1=(-vb)/(2*va);
			res.innerHTML=("X1="+x1.toFixed(2));			
		}else if(valor<0) {
			res.innerHTML=("NO HAY SOLUCIÓN");
		}
  
} 
