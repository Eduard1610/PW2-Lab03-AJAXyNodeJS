
const url = "http://localhost:3000/pages";
const getPageBtn = document.querySelector("#getPages");
const createPageBtn = document.querySelector("#newPage");

getPageBtn.addEventListener("click" , function () {  
    consultarDB();
});


createPageBtn.addEventListener("click" , function(){
    addPage();
})


function addPage(){
    const titulo = document.querySelector("#namePage").value;
    const contenido = document.querySelector("#contentPage").value;
    const newPost = {
        title :  titulo,
        content : contenido
    }
    console.log(newPost);

    fetch(url , {
        //Escogemos el método (por defaul es GET)
        method:'POST',
        //Asi como el server responde en JSON nosotros debemos de convertir el objeto que enviamos en JSON
        body: JSON.stringify(newPost),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    //Como lo que me devuelve el server lo envia en json , debo de converitr la respuesta como json
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    //Pata que sea más dinamico
    consultarDB();
}



function consultarDB(){
    fetch(url)
        //El server nos envia una respuesta y la convertimos a .json
    .then(response => response.json() )
    .then( data => {
        llenarTabla(data);
    })  
    .catch(err =>{
        console.log(err);
    })
}

function  llenarTabla (registros) { 
    const tBody = document.querySelector("tbody");
    let contTBody = "";
    registros.forEach( registro => {
        //console.log(registro);
        contTBody += `<tr>
                        <td>${registro.id} </td>
                        <td>${registro.name} </td>
                        <td><button class = "contenido" id = ${registro.id}> Ver </button> </td>
                    </tr>`
    });
    tBody.innerHTML = contTBody;

    const botones = document.querySelectorAll(".contenido");
    //Id : 4
}

//Id 5


