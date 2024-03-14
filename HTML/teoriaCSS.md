**CSS**
IMPORTANTE: El orden importa, lo último escrito en el código tendrá prioridad con respecto a lo escrito anteriormente

Agregamos al hmtl en la parte de head lo siguiente donde href infica el nombre del archivo css:
```
 <link rel="stylesheet" href="style.css"/>
```
SELECTORES
___

Aplicar el color tomato a todo el body
```
body {
    color: tomato;
}
```
*H1*
```
<h1 id="titulo">Titulo</h1>
```

Aplicar un color a todos los h1
```
h1 {
    color: tomato;
}
```
Css buscará un elemento que contiene la propiedad de id que cuyo valor es título
```
    #titulo {
        color: tomato;
    }
```
Aplicar color a los párrafos
```
    <p class="texto">parrafo 1</p>
    <p class="texto especial">parrafo 1</p>
    <p class="especial">parrafo 1</p>
```

Aplicar a todos los parrafos el mismo color
```
p {
    color: tomato;
}
```
Para seleccionar una clase
```
.texto {
    color: tomato;
}
```
*PARRAFOS*
A todas las etiquetas de p que contengan una clase de texto (cambiará a las 2 primeras)
```
p.texto {
    color: tomato;
}
```
A todas las etiquetas de p que contengan una clase de especial (cambiará a las 2 últimas, por lo que el orden importa)
```
p.especial {
    color: tomato;
}
```
*DIV*
```
<div>
    <p>hola</p>
    <h2>caracola</h2>
    <h3>sin cola</h3>
</div>
```
Aplicamos un estilo a todas las etiquetas de p que se encuentren en div
```
div p {
    color: tomato;
}
```
Aplicamos un estilo a todas las etiquetas de h2 que se encuentren en div
```
div h2 {
    color: tomato;
}
```

Elegir más de un elemento y aplicarles lo mismo
```
    div h2, div h3 {
        color: tomato;
    }
```
*SELECTOR UNIVERSAL*
Permite modificar TODO lo que hay en nuestro documento
Cambiar tamaño a todo
```
    * {
        font-size: 24px;
    }
```
Sin embargo, cambia las propiedades solo si no han sido definidas por otros selectores.
Solo se cambiará el color de los elemntos cuyo color no haya sido modificado anteriormente

```
    * {
        color: black;
    }
```
*COMENTARIOS* con /* */

ESTILOS
___

**BORDER**
Asignamos un borde a los elementosde un grosor 5px color black y estilo dashed por ejemplo
```
    .color {
        border: 5px black dashed;
    }
```
Estilos:
1. dotted
2. dashed
3. solid
4. double
5. groove
6. ridge
7. inset
8. outsed
9. none
10. hidden

Indicar estilo sin necesidad de poner ancho
```
border-style: solid;
```

Indicar color
```
border-color: blue;
```
Poner borde redondeado indicando el radio
```
border-radius: 5px;
```
Poner ancho
```
border-width: 5px;
```
UNIDADES 
___

(no recomendables)
```
border-width: 5cm;
border-width: 5mm;
border-width: 5in;
border-width: 5pt;
border-width: 5pc;
```
(si recomendables)
```
border-width: 2em;  2 veces tam fuente
border-width: 2rem; 2 veces fuente de etiquet html, suele ser 1rem=16px
```
BACKGROUND DEL ELEMENTO
___
```
#fondo {
    background-color: red;
}
```
Intensidad del color (el último dígito)
1=totalmente solido
0=totalmente transparente
```
background-color: rgba(0,0,0,1);
```
Transparencia al elemento completo y no solo al fondo
```
opacity: 0.3;
```
Imagen de fondo
```
background-image: url('coffe.png');
``` 
Dimensiones de la imagen
``` 
background-size: cover; asi usa todo el ancho disponible
background-size: auto; ancho automatico
background-size: contain; intenta contener la imagen 
background-size: 400px 400px; ancho*alto
background-repeat: no-repeat; para que la imagen no se repita
background-repeat: repeat-x; repite solo eje horizontal
background-repeat: repeat-y; repite solo eje vertical
background-position: center top; cambiar posicion top/center/bottom/unidades de medida

```  
Se puede aplicar todo al mismo tiempo
```  
background: tomato url('coffe.png') repeat-y center bottom;
```  
MÁRGENES
___
```  
<div class="margen">
    chanchito de margen
</div>
```  
```  
background-color: chocolate;
    arriba derecha abajo izquierda
margin: 15px 20px 25px 30px;
padding: 30px 25px 20px 15px; genera espacios dentro del elemento
overflow: hidden; borra contenido que sobresale
overflow: scroll; barras laterales para ver todo contenido
outline: 1px solid red; por fuera del borde pero antes del margen
``` 
DECORANDO
___
Posicion textos
```  
<p class="texto">
    Centrate para aprobar
</p>
``` 

``` 
.texto{
    text-align: center; center/right/justify
}
``` 
Decorando textos
``` 
.texto{
    font-family: Verdana, Geneva; si verdena no se puede cargar, carga la siguiente

    text-decoration:underline; none/underline/line-through/overline
                dcha abajo difuminado
    text-shadow: 3px 5px  5px blue; agrega sombra

}
``` 
Decorando Links
todos los links que no han sido visitados
``` 
a:link{
    color: blue;
}
``` 
los visitados
``` 
a:visited{
    color: blue;
}
``` 
pasando mouse por encima
``` 
a:hover{ 
    
}
```
pinchando el link
``` 

 a:active{

 }
``` 
Editando una lista
Eliminar puntos de enumeración
``` 
ul {
    list-style: none;
    padding-left: 0;
}
``` 
Ubicar puntos dentro del texto
``` 
list-style-position: inside;
``` 
Cambiar simbolo
```
    ul{
        list-style-type: disc; 
    }
```
Dandole estilo a las tablas
``` 
<table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
        </tr>
        <tr>
            <td>Pepita</td>
            <td>Grilla</td>
        </tr>
        <tr>
            <td>Pepite</td>
            <td>Grille</td>
        </tr>
</table>
``` 
__
``` 
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
        border: solid 1px #eeee;
        padding: 5px;
    }
``` 
Cambiar color si paso mouse por encima
``` 
tr:hover {
    background-color: #aaa;
    cursor: pointer; aparece una manita
}
``` 
Pares e impares
``` 
tr:nth-child(even) {
    background-color: #eee;
}
``` 
Para que haga salto de linea 
``` 
display: block; y para que no lo haga es inline
``` 
Para desparecer un elemento
``` 
visibility: hidden;
``` 
Posicion 
``` 
#articulo {
    poisition: relative; 
    left: 20px;
    top: 25px;
}
``` 

