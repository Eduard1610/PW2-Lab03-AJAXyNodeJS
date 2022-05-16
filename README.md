<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
    <tbody>
        <tr><td colspan="3"><span style="font-weight:bold;">Formato</span>: Guía de Práctica de Laboratorio</td></tr>
        <tr><td><span style="font-weight:bold;">Aprobación</span>:  2022/03/01</td><td><span style="font-weight:bold;">Código</span>: GUIA-PRLD-001</td><td><span style="font-weight:bold;">Página</span>: 1</td></tr>
    </tbody>
</table>
</div>

<div align="center">
<span style="font-weight:bold;">INFORME LABORATORIO</span><br />
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ajax y NodeJS</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>03</td><td>AÑO LECTIVO:</td><td>2022 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>
<tr>
<td>FECHA INICIO::</td><td>09-May-2022</td><td>FECHA FIN:</td><td>13-May-2022</td><td>DURACIÓN:</td><td>04 horas</td>
</tr>
<tr><td colspan="6">INTEGRANTES:
    <ul>
        <li>Durand Obando Eduardo Franshua.</li>
        <li>Tejada Lazo Jordy Rolando.</li>
        <li>Chua Aguilar Jean Carlo Leonel</li>
        <li>Hurtado Bejarano Michael Steve</li>
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTES:
<ul>
<li>Richart Smith Escobedo Quispe - rescobedoq@unsa.edu.pe</li>
</ul>
</td>
</<tr>
</tdbody>
</table>

# Ajax y NodeJS

[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]

[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Vim][Vim]][vim-site]
[![Java][Java]][java-site]

#



## EJERCICIOS PROPUESTOS
-   En grupos de 3 a 5 personas implemente una aplicación web que navegue sobre archivos Markdown y permita:
    1. Listas los archivos Markdown disponibles
    2. Ver el contenido de un archivo Markdown traducido a HTML
    3. Crear nuevos archivos MarkDown y almacenarlos en el servidor

-   La comunicación entre el cliente y el servidor tiene que ser usando JSON sólamente.
El cliente debe usar AJAX para sus peticiones
El servidor debe usar NodeJS
Su aplicación debe ser de página única, es decir que sólo habrá un archivo index.html y nada más.

-   Si los enlaces proporcionado en esta guía no le son suficientes, puede revisar códigos en Internet que le ayuden con cosas como ejemplos: listar un directorio en NodeJS; pero deberá incluir los enlaces correspondientes en sus archivos como comentarios y sólo podrá usar código de stackoverflow, incluir código de cualquier otra fuente está prohibido y se considerará actitud deshonesta.

        Nuestra aplicación web lista y permite crear secciones y su contenido (CAPTURA)
<img src="./img/captura1.png"><img src="./img/captura2.png">
#

## CUESTIONARIO
- En el Ejemplo "Hola Mundo" con NodeJS. ¿Qué pasó con la línea: "Content type ….."?
    - La linea "Content Type" no fue agregada.
- En los ejercicios. ¿En qué lugar debería estar el archivo poema.txt?
    - Dentro del directorio "priv".
- ¿Entiende la expresión regular en el código y se da cuenta de para qué es útil?
    - Sí, lo que hace es reemplazar todos los saltos de linea con la etiqueta <br> de html.
- Note que la respuesta del servidor está en formato JSON, ¿Habrá alguna forma de verla directamente?
    - Si, ya que podemos manejar la respuesta por medio de "then" haicendo uso  de  .json() metodo y luego imprimirlo.

## COMENTARIOS
- Este laboratorio se nos hizo particularmente complicado, porque encontramos conceptos nuevos que debimos investigar y aplicar.
#

## REFERENCIAS
-   JavaScript code using the latest ECMAScript. Packt Publishing Ltd, 2018.
-   Greg Lim. Beginning Node.js, Express & MongoDB Development. Amazon, 2019.
-   https://www.w3schools.com/nodejs/nodejs_intro.asp
-   https://nodejs.org/en/docs/guides/getting-started-guide/
-   https://nodejs.dev/learn
-   https://www.w3schools.com/js/js_api_fetch.asp
-   https://expressjs.com/es/
-   https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
-   https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction

#

[license]: https://img.shields.io/github/license/rescobedoq/pw2?label=rescobedoq
[license-file]: https://github.com/rescobedoq/pw2/blob/main/LICENSE

[downloads]: https://img.shields.io/github/downloads/rescobedoq/pw2/total?label=Downloads
[releases]: https://github.com/rescobedoq/pw2/releases/

[last-commit]: https://img.shields.io/github/last-commit/rescobedoq/pw2?label=Last%20Commit

[Debian]: https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white
[debian-site]: https://www.debian.org/index.es.html

[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-site]: https://git-scm.com/

[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-site]: https://github.com/

[Vim]: https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white
[vim-site]: https://www.vim.org/

[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
[java-site]: https://docs.oracle.com/javase/tutorial/


[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Vim][Vim]][vim-site]
[![Java][Java]][java-site]


[![License][license]][license-file]
[![Downloads][downloads]][releases]
[![Last Commit][last-commit]][releases]
