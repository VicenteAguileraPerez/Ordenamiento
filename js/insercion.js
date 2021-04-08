

var listaOrdenada = document.querySelector("#listOrdenar")
var datos = [];
var datosOrdenados = [];

var buttonOrdenar = document.getElementById("btnOrdenar");
buttonOrdenar.addEventListener("click",ordenar);
function ordenar(){
    
    var elementos = document.querySelectorAll('#listAgregar li');
    datos=[];//limpio el array
    datosOrdenados=[];//limpio el array
    elementos.forEach(elemento=>{
        datos.push(elemento.childNodes[0].textContent);
    });
    insertSort();
}

function insertSort()
{
    datosOrdenados.push(datos[0]);
    datos.splice(0,1);
    while(datos.length>0)
    {
        //creo lista
        let ul = document.createElement('ul');
        ul.className="list-group list-group-horizontal"; 
        listaOrdenada.appendChild(ul);
        for(var i=0;i<datosOrdenados.length;)
        {
            console.log("Ordenados"+i);
            if(parseInt(datos[0])<=parseInt(datosOrdenados[i]))
            {
                datosOrdenados.splice(i,0,datos[0]);
                datos.splice(0,1);
                console.log("Ordenados"+datosOrdenados);
               
                break;
            }
            else{
                i++;
               if(i==datosOrdenados.length)
                {
                    datosOrdenados.splice(i,0,datos[0]);
                    datos.splice(0,1);
                    console.log("Ordenados"+datosOrdenados);
                    break;
                }
                continue;
            }
        }
        for(var i=0;i<datosOrdenados.length;i++)
        {
            
            var li = document.createElement('li');
            li.className="list-group-item";
            li.textContent=datosOrdenados[i];
            ul.appendChild(li);
        }
        
       
    }
}
