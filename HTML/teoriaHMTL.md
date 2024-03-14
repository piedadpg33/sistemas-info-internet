**HTML**\
*Generalidades*

ESQUEMA BÁSICO 
```
<!DOCTYPE hmtl>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
La información que se incluye en la cabecera no se visualiza y es obligatorio incluir en ella un título:
 ``` 
 <title> Primer documento HTML 5 <title>
 ```
Referencias a caracteres:
```
&lt; <
&gt; >
&amp; &
&quot; ”
&aacute; á
&eacute; é
&iacute; í
&oacute; ó
&uacute; ú
&ntilde; ñ
&iquest; ¿
```
*Textos y listas*
```
<i>extranjerismo</i>
<em>&eacute;nfasis</em>
<strong>importanteParaAutor</strong>
<mark>importanteParaUsuario</mark>
<b>destacableSinCategoria</b>

linea horizontal usando <hr>
retorno de carro usando <br>
delimitar párrafo usando <p>
respetar espacios en blanco y retornos de carro usando <pre> </pre>
citar titulos  usando <cite> </cite>
```
LISTAS ORDENADAS
Usamos ```<ol>``` para identificar el tipo de lista y ```<li>``` para definir los elementos
```
<ol>
<li> Java </li>
<li> Python </li>
<li>C++</li>
</ol>
```
LISTAS DESORDENADAS
Usamos ```<ul>``` para identificar el tipo de lista y ```<li>``` para definir los elementos
```
<ul>
<li> La paella </li>
<li>El cocido gallego </li>
<li>Merluza</li>
</ul>
```
LISTAS DE DEFINICIÓN
Usamos ```<dl>``` para identificar el tipo de lista, los términos a definir usando ```<dt>``` y las definiciones con ```<dd>```
```
<ul>
<li> La paella </li>
<li>El cocido gallego </li>
<li>Merluza</li>
</ul>
```
*Estructura*
ENCABEZADO
El tamaño se va degradando, donde h1 tiene el tamaño mayor
```
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
<h4>Encabezado 4</h4>
<h5>Encabezado 5</h5>
<h6>Encabezado 6</h6>
```
SPAN
Para poder identificar un texto o etiqueta dentro de otras etiquetas para después hacer referencias
```
<p> Mi madre tiene ojos <span class="azul"> azules </span>
y pelo <span class="amarillo"> rubio </span>.</p>
```
DIV
define una división o sección en el documento que puede
emplear un conjunto de estilos diferentes que el resto del documento
```
<div class="especial">
    <h3> Esto es una cabecera </h3>
    <p> Esto es un párrafo </p>
</div>
```
*Enlaces e imágenes*
ENLACES
usar la segunda
```
<a href=”http://www.myweb.com/documentospersonales/CV.html”>
Mi currículum
</a>

<a href=”CV.html”> Mi currículum </a>
```
enlace a otro servidor
```
<a href=”http://www.google.com”> Enlace a Google</a>
```
para saltar de pos en una página extensa
```
<a id= "nombre"></a>    
```
para saltar al pto del documento donde está la etiqueta (#etiqueta)
```
<a href="#nombre">volver al índice</a>  
```
para saltar desde otra página web e ir directamente a es pto del documento
```
<a href=" http://www.ejemplo.es/ejemplo.html#fin"> ir al fin </a>   
```
Podemos utilizar el atributo *target* para indicar en que ventana abrimos el destino del enlace
_blank: Ventana o pestaña nueva
_parent: marco padre
_self: mismo marco
_top: marco principal de la página
Framename: en unaVentana o pestaña con ese nombre, si es la
primera vez o se cerró la anterior creará una nueva con el nombre indicado

*Imágenes*
Para insertar imagenes debemos intodcit lo siguiente, entre comillas estará la url o la ruta si lo tenemos en la misma carpeta de trabajo
```
<img src="" />

<img src="img/chupapingas.jpg" width="400" />
```
En este ejempo la imagen está en la carpeta img y la anchura es 400 pixeles

*Formularios*
Usados para recopilar informació del usuario
```
<form>
</form>
```
INPUT
Nos aparecerá un cuadro para rellenar
```
<form>
        <input />
</form>
```
ETIQUETAS
Para indicar al usuario lo que debe introducir en el formulario
```
<label>Nombre</label>
```
Añadiendo esto si hacemos click en nombre directamente nos llevará al formulario
```
    <form>
        <label for="nombre">Nombre</label>
        <input id="nombre" />
    </form>
```
El servidor recibe un objeto de formulario con clave name y valor de nombre. Placeholder rellena el formulario con un texto suave que al hacer click se borra
```
<input id="nombre" name="nombre" placeholder="rellene esto" />
```
TIPOS DE INPUT
Botón
```
<input type="submit" id="nombre" name="nombre" placeholder="rellene esto" />
```
Texto, es la que viene por defecto
```
<input type="text" id="nombre" name="nombre" placeholder="rellene esto" />
```
Email
```
<input type="email" id="nombre" name="nombre" placeholder="rellene esto" />
```
Password, oculta com *
```
<input type="password" id="nombre" name="nombre" placeholder="rellene esto" />
```
Radio, un circulo de seleccion
```
<input type="radio" id="nombre" name="nombre" placeholder="rellene esto" />
```
Checkbox
```
<input type="checkbox" id="nombre" name="nombre" placeholder="rellene esto" />
```
Seleccionar de archivos
```
<input type="file" id="nombre" name="nombre" placeholder="rellene esto" />
```
CUADRO DE TEXTO A RELLENAR
```
 <textarea rows="10" id="comentario" name="comentario" placeholder="por cada comentario una kill segura en la siguiente partida"></textarea>
```
*Botones*
tipos: button, reset o submit
```
<button type="button">Enviar</button>
```