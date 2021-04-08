
var listaOrdenada = document.querySelector("#listOrdenar")

var datos = [];


var buttonOrdenar = document.getElementById("btnOrdenar");
buttonOrdenar.addEventListener("click",ordenar);
function ordenar(){
    
    var elementos = document.querySelectorAll('#listAgregar li');
    datos=[];//limpio el array
   
    elementos.forEach(elemento=>{
        datos.push(elemento.childNodes[0].textContent);
    });
    alert("Burbuja")
    bubbleSort();  
}

function bubbleSort()
{
    console.log(datos); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja

    /**
     *  2 1 4
     */
    var temp;
    var swap=0;
    var t = datos.length;
    var datosOrdenados=new Array();
       for (var i = 0; i < t; i++) 
       {
           for (var k = 0; k <t-1; k++) 
           {
            let ul = document.createElement('ul');
            ul.className="list-group list-group-horizontal"; 
            listaOrdenada.appendChild(ul);
            for(var p=0;p<datos.length;p++)
            {
                var li = document.createElement('li');
                li.className="list-group-item";
                li.textContent=datos[p];
                ul.appendChild(li); 
                       
            }
            console.log(datos[k] +" "+ datos[k+1]+" "+ (parseInt(datos[k]) > parseInt(datos[k+1])));
               if(parseInt(datos[k]) > parseInt(datos[k+1]))
               {
                  temp = datos[k];
                  datos[k] = datos[k+1];
                  datos[k+1]=  temp;
                  swap=0;
               }//fin if
               else{
                   swap++;
                   if(swap==t-1)
                   {
                    i=t;
                    k=t;
                   }
               }
               
               
               
               
               
           }// fin 2 for
       }//fin 1 for
       console.log("datosOrdenados:"+datosOrdenados);
       
}