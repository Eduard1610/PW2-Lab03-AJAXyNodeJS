const path = require('path'); //Para unir directoriaos independientemente del SO
const express = require('express');
const app = express();

const { marked } = require('marked');



//Mi almacen de paginas que ire creando
const pages = [
    {
        id : 1,
        name: 'Pagina1',
        content: 'Cont1'
    },
    {
        id : 2,
        name: 'Pagina2',
        content: 'Cont2'
    }
];

//middlewares
app.use(express.json()); //Se encarga de poder recibir json
app.use(express.urlencoded({extended: false}));//Se encarga de recibir string , matrices

//CON COMILLAS SIMPLES

// Se ejecuta si el usuario pide entrar a /pages
app.get('/pages', (request, response) => {
    response.json(pages); //Respondo con mi arreglo
});

//Para mostrar el contenido
app.get('/content' , (request , response) =>{
    response.json(pages);
});


//Para enviar algo desde el navegador al servidor utilizo peticion post
app.post('/pages' , (request , response) => {
    console.log(request.body); //Se imprime en el "server" (terminal)
    const {title, content} = request.body;//Destructurizacion   
    let miTit = marked.parse(title);
	let miCont = marked.parse(content);
    //console.log(miCont);
    pages.push({
        id : (pages.length + 1),
        name: miTit,
        content: miCont
    })
    response.json("Creado Exitosamente");//Se envia al cliente
})


//Usara los archivos del dir especificado ( ? defecto)
app.use(express.static(path.join(__dirname , "public")));


app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
});
