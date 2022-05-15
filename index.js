const path = require('path');
const express = require('express');
const app = express();

//Almacen de páginas
const pages = [
    {
        name: 'Pagina1',
        content: 'Cont1'
    },
    {
        name: 'Pagina2',
        content: 'Cont2'
    }
];

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

//RUTAS
app.get('/pages', (request, response) => {
    response.json(pages);
});

app.post('/pages', (request, response) => {
    console.log(request.body);
    console.log('hola');
    response.send('Datos Recibidos');
});
