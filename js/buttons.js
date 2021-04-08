var buttonAgregar = document.getElementById("btnAgregar");
buttonAgregar.addEventListener("click",agregar);
function agregar(){
    let value = document.querySelector("#numeros").value;
    if(value!="")
    {
        let li = document.createElement('li');
        li.className="list-group-item";
        li.textContent=value;
        lista.appendChild(li);
    }
    else{
        alert("hola")
    }
   
    
}
var lista = document.querySelector("#listAgregar");
var buttonLimpiar = document.getElementById("btnLimpiar");
buttonLimpiar.addEventListener("click",limpiar);
function limpiar(){
    
    lista.innerHTML = '';
}

var buttonPrimero = document.getElementById("btnPrimero");
buttonPrimero.addEventListener("click",primero);
function primero(){
var elementos = document.querySelectorAll('#listAgregar li');
   if(elementos.length>0)
   {
    lista.removeChild(lista.firstElementChild);
   }
   else{
    alert("No hay elementos")
   } 
}

var buttonUltimo = document.getElementById("btnUltimo");
buttonUltimo.addEventListener("click",ultimo);
function ultimo(){
  var elementos = document.querySelectorAll('#listAgregar li');
  if(elementos.length>0)
  {
    lista.removeChild(lista.lastElementChild);
  } 
  else
  {
    alert("No hay elementos")
  } 
}


var buttonEliminarEn = document.getElementById("btnEliminarEn");
buttonEliminarEn.addEventListener("click",eliminarEn);
function eliminarEn(){
   var elementos = document.querySelectorAll('#listAgregar li');
   let value = document.querySelector("#posicion").value;
   if(elementos.length>0 && value!="")
   {
       if(parseInt(value)  )
       {
            if(value-1<elementos.length)
            {
                lista.removeChild(elementos[value-1]);
            }
            else{
                alert("no existe la posición escrita")
            }
       }
       else{
        alert("Introduzca un número")
       }
        
   }
   else if(value=="")
   {
        alert("Campo posición vacío")
   } 
   else{
    alert("No hay elementos")
   }
}