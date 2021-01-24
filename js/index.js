/*
Este sirve para cargar la hora y llamar a la funcion de la hora para mostrar la hora actual
*/
$(document).ready(function(){
    hora();
});
/*
Esta funcion sirve para mostrar la hora actual con el intervalo por 1 segundo 
(1000 milisegundos)
*/
function hora()
{
    var date = new Date();
    var hora = date.toLocaleTimeString();
    var fecha = date.toLocaleDateString("es-Es", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    $("#horaActual").text(hora+" "+fecha);
    setTimeout("hora()", 1000);
}
/*
Esta funcion sirve para cargar el menu del nav para mostrar u oculta el menu con el 
slideToogle pero solo los dispositivos (movil, tablet, etc) hasta el ancho de 1024px.
*/
function cargarMenu(){
        $(".menu_bar").click(function()
        {
            $("nav").slideToggle();
            event.stopPropagation();
        });
        $("#liOtros").click(function()
        {
            $(this).children("ul").slideToggle();
        });
}
/*
Esta es la funcion para cargar los datos de modelismo para mostrar el modelismo por tipo de 
modelismo (Por ejemplo: avion, tren, coche, etc.) 
*/
function cargarModelismo()
{
    $.ajax({
        method:"GET",
        dataType:'json',
        url:"js/model.json"
    })
    .done(function(datos)
    {
        mostrarModelismo(datos);
    });
}
/*
Esta es la funcion para cargar los datos de modelismo para mostrar las tablas de los precios 
de modelismo
*/
function cargarTabla()
{
    $.ajax({
        method:"GET",
        dataType:'json',
        url:"js/model.json"
    })
    .done(function(datos)
    {
        mostrarTablas(datos);
    }); 
}
/*
Esta funcion sirve para mostrar las tablas de los precios del modelismo
*/
function mostrarTablas(modelos)
{
    /*
    Sacar los datos de los modelos a listadoModelos es como el array de modelos
    */
    listadoModelos=modelos;
    /*
    La cadena sirve para crear las etiqutas de HTML
    Esta cadena sirve para crear uns tabla de los precios de modelismo con el encabazado 
    del grupo de las celdas de la tabla
    */
    var cadena = "<table>";
    cadena+="<tr>";
    cadena+="<th>Imagen</th>";
    cadena+="<th>Nombre</th>";
    cadena+="<th>Marca</th>";
    cadena+="<th>Categoria</th>";
    cadena+="<th>Precio</th>";
    cadena+="<th>Enlace</th>";
    cadena+="</tr>";
    /*
    Este es el bucle sirve para recorrer de listadoModelos y para insertar las filas 
    de la tabla de la lista que incluye la imagen, el nombre, la marca, etc.
    */
    listadoModelos.forEach(function(model)
    {
        cadena+="<tr>";
        cadena+="<td><img src='img/"+model.imagen+"' alt='"+model.alt+"'></td>";
        cadena+="<td>"+model.nombre+"</td>";
        cadena+="<td>"+model.marca+"</td>";
        cadena+="<td>"+model.categoria+"</td>";
        cadena+="<td>"+model.precio+"</td>";
        cadena+="<td><a href='"+model.direccion+"#"+model.id+"'>Entrar</a></td>";
        cadena+="</tr>";
    }
    );
    cadena+="</table>";
    /*
    append sirve para añadir los contenidos de cadena a la lista de los precios
    */
    $("#listaPrecios").append(cadena);
}
/*
Esta funcion sirve para mostrar la lista de los modelismos con los datos de modelos
*/
function mostrarModelismo(modelos)
{
    /*
    Sacar los datos de los modelos a listadoModelos es como el array de modelos
    */
    listadoModelos=modelos;
    /*
    Este es el bucle sirve para comprobar si hay los objetos del localStorage o no.
    Si hay los objetos del localStorage que tienen sacar los objetos del localStorage
    a modelismosCarritos.
    Si no hay los objetos del localStorage que tiene crear un array del modelismoCarritos
    */
    if(JSON.parse(localStorage.getItem('carrito')))
    {
        modelismosCarritos =JSON.parse(localStorage.getItem('carrito'));
    } else {
        modelismosCarritos = [];
    }
   /*
    Este es el bucle sirve para recorrer de listadoModelos y para escribir 
    las etiquetas del HTML y los datos del model (nombre,imagen,precio,etc).
    */
    listadoModelos.forEach(function(model){
        /*
        Este es el bucle sirve para comprobar obtener la pagina actual y compara con el
        tipo del model que va a crear las cadenas de HTML y los datos del model
        */
        if((location.pathname=="/tren.html" && model.tipo=="tren") || 
        (location.pathname=="/avion.html" && model.tipo=="avion") || 
        (location.pathname=="/barco.html" && model.tipo=="barco") ||
        (location.pathname=="/coche.html" && model.tipo=="coche"))
        {
            var cadena="<div id='"+model.id+"' class='divModelismo'>";
            cadena += "<h4>"+model.nombre+"</h4>";
            cadena += "<img src='img/"+model.imagen+"' alt='"+model.alt+"'>";
            /*
            Este es el bucle sirve para comprobar la descripcion si está vacia i no.
            */
            if(model.descripcion!=undefined)
            {
                cadena += "<p>"+model.descripcion+"</p>";
            }
            /*
            Este es el bucle sirve para comprobar la descripcion2 si está vacia i no.
            */
            if(model.descripcion2!=undefined)
            {
                cadena += "<p>"+model.descripcion2+"</p>";
            }
            /*
            Este es el bucle sirve para comprobar la descripcion3 si está vacia i no.
            */
            if(model.descripcion3!=undefined)
            {
                cadena += "<p>"+model.descripcion3+"</p>";
            }
            /*
            Este es el bucle sirve para comprobar la enumeracion de la descripcion 
            si está vacia i no.
            */
            if(model.enumDescripcion!=undefined)
            {
                cadena += "<ul>";
                cadena += "<li>"+model.enumDescripcion+"</li>";
                cadena += "<li>"+model.enumDescripcion1+"</li>";
                cadena += "<li>"+model.enumDescripcion2+"</li>";
                cadena += "<li>"+model.enumDescripcion3+"</li>";
                cadena += "<li>"+model.enumDescripcion4+"</li>"; 
                cadena += "</ul>";
            }
            cadena += "<p><strong>Marca:</strong> "+model.marca+"</p>";
            cadena += "<p><strong>Categoria:</strong> "+model.categoria+"</p>";
            cadena += "<p><strong>Dimensión:</strong> "+model.dimension+"</p>";
            cadena += "<p><strong>Escala:</strong> "+model.escala+"</p>";
            /*
            Este es el bucle sirve para comprobar el peso si está vacia i no.
            */
            if(model.peso!=undefined)
            {
                cadena += "<p><strong>Peso:</strong> "+model.peso+"</p>";
            }
            cadena += "<p class='pPrecio'><strong>Precio:</strong> "+model.precio+"</p>";
            /*data-nombre es el atributo de datos del nombre*/
            cadena += "<input type='button' value='Comprar' data-nombre='"+model.nombre+"' class='botonComprar'>";
            cadena += "</div>";
            /*Este es el buscar sirve para buscar el tipo del model y añadir los contenidos
            a la lista del tipo del model*/
            if(model.tipo=="tren")
            {
                /*
                append sirve para añadir los contenidos de cadena a la lista de los trenes
                */
                $('#listaTren').append(cadena);
            }
            else if(model.tipo=="avion")
            {
                /*
                append sirve para añadir los contenidos de cadena a la lista de los aviones
                */
                $('#listaAviones').append(cadena);
            } else if(model.tipo=="barco") 
            {
                /*
                append sirve para añadir los contenidos de cadena a la lista de los barcos
                */
                $('#listaBarcos').append(cadena);
            } else {
                /*
                append sirve para añadir los contenidos de cadena a la lista de los coches
                */
                $('#listaCoches').append(cadena); 
            }         
        } 
    });
    $(".botonComprar").on('click',function()
    {
        /*
        Cuando pulsa el boton que va a sacar el dato del nombre
        */
        var pinchado = $(this).data('nombre');
        /*
        Este es la variable encontrado sirve para si encuentra o no el pinchado en el carrito
        Pero encontrado es false porque es el inicio.
        */
        var encontrado = false;
        var objetoModelismo = $.grep(listadoModelos,function(model)
        {
            return model.nombre===pinchado;
        });
        /*
        Este es el bucle sirve para recorrer de listadoModelos y para comprobar si existe
        el pinchado en el carrito o no y mostrar el alert
        */
        modelismosCarritos.forEach(function(model)
        {
            if(pinchado==model.nombre)
            {
                alert("Existe en el carrito");
                encontrado = true;     
            }
        });
        /*
            Si no encuentra el pinchado en el carrito que va a añadir el objeto de modelismo 
            en el modelismosCarritos y el modelismosCarritos va a guardar en el localStorage
        */
        if(encontrado==false)
        {
            modelismosCarritos.push(objetoModelismo[0]);
            localStorage.setItem('carrito',JSON.stringify(modelismosCarritos));
        }
        
    });
}
/*
Esta funcion sirve para mostrar los carritos del modelismo que va a comprar los modelos
en el carrito
*/
function mostrarCarrito()
{
    /*
    Este es el bucle sirve para comprobar si hay los objetos del localStorage o no.
    Si hay los objetos del localStorage que tienen sacar los objetos del localStorage
    a modelismosCarritos.
    Si no hay los objetos del localStorage que tiene crear un array del modelismoCarritos
    */
    if(JSON.parse(localStorage.getItem('carrito')))
    {
        modelismosCarritos =JSON.parse(localStorage.getItem('carrito'));
    } else {
        modelismosCarritos = [];
    }
    /*
    La cadena sirve para crear las etiqutas de HTML
    Esta cadena sirve para crear uns tabla de los precios de modelismo con el encabazado 
    del grupo de las celdas de la tabla
    He creado una variable suma sirve para calcular los subtotales de los modelismo
    */
    var cadena="<table>";
    var suma = 0;
    cadena+="<tr>";
    cadena+="<th>Imagen</th>";
    cadena+="<th>Nombre</th>";
    cadena+="<th>Marca</th>";
    cadena+="<th>Categoria</th>";
    cadena+="<th>Precio</th>";
    cadena+="<th>Unidad</th>";
    cadena+="<th>Total</th>";
    cadena+="<th></th>";
    cadena+="</tr>";
    /*
    Este es el bucle sirve para recorrer de listadoModelos y para insertar las filas 
    de la tabla de la lista que incluye la imagen, el nombre, la marca, etc.
    */
    modelismosCarritos.forEach(function(model)
    {
            cadena+="<tr>";
            cadena+="<td><img src='img/"+model.imagen+"' alt='"+model.alt+"'></td>";
            cadena+="<td>"+model.nombre+"</td>";
            cadena+="<td>"+model.marca+"</td>";
            cadena+="<td>"+model.categoria+"</td>";
            cadena+="<td><p class='precio'>"+model.precio+"</p>€</td>";
            cadena+="<td><input type='number' name='unidades' class='unidad' value='1'></td>";
            cadena+="<td class='subtotal'>"+model.precio+"</td>";
            cadena+="<td><i class='fas fa-trash'></i></td>"
            cadena+="</tr>";
            suma += parseFloat(model.precio);
    });
    cadena+="</table>";
    cadena+="<div><p>Total: </p><p id='total'>"+suma+"€</p></div>";
    cadena+="<a class='btnEnviar' href='index.html'>Enviar</a>";
    /*
    append sirve para añadir los contenidos de cadena a la lista de los carritos
    */
    $("#listaCarrito").append(cadena);
    /*
    Cuando pulsa el boton Eliminar sirve para eliminar una fila de la tabla
    y sacar el nombre de una fila para eliminar los objetos del nombre en el localStorage
    Cuando se actualiza la suma que sirve para sumar los subtotales y el total 
    */
    $("table > tbody > tr > td:last-child").click(function()
    {
        var nombre = $(this).parent().children('td').eq(1).text(); 
        $(this).parent().remove();
        eliminar(nombre);
        sumar();
    });
    /*
    Este es el input del numero sirve para actualizar los subtotales y el total
    que se calcula el subtotal (precio * unidad) y la suma de los subtotales (total) 
     */
    $("table > tbody > tr > td > input[type='number']").on('input',function(){
        /*Sacar el precio desde el padre del hijo de td (numero=4)*/
        var precio = parseFloat($(this).parent().parent().children('td').eq(4).text());
        /*Se calcula el precio * la unidad y va a pasar al text del padre del hijo de td 
        (numero=6) */
        $(this).parent().parent().children('td').eq(6).text(precio*$(this).val());
        /*Es la variable del total que va sumar los subtotales */
        var total=0;
        /*Recorrer el subtotal para sumar los subtotales */
        $(".subtotal").each(function()
        {
            total+=parseFloat($(this).html());
        });
        /*Pasar el total al text de total*/
        $("#total").text(total+"€");
    });
    /*
    Cuando pulsa el boton Enviar que va a enviar a la tienda y va a eliminar los datos del 
    localStorage.
    */
    $(".btnEnviar").click(function()
    {
        if(JSON.parse(localStorage.getItem('carrito').length!=[]))
        {
            alert("Ya ha enviado");
        }        
        localStorage.removeItem('carrito');
        localStorage.clear();
    });
}
/*
Esta funcion sirve para eliminar la fila de la tabla con el nombre
*/
function eliminar(nombre)
{
    /*
    Este es el input del numero sirve para actualizar los subtotales y el total
    que se calcula el subtotal (precio * unidad) y la suma de los subtotales (total) 
     */
    $("table > tbody > tr > td > input[type='number']").on('input',function(){
        /*Sacar el precio desde el padre del hijo de td (numero=4)*/
        var precio = parseFloat($(this).parent().parent().children('td').eq(4).text());
        /*Se calcula el precio * la unidad y va a pasar al text del padre del hijo de td 
        (numero=6) */
        $(this).parent().parent().children('td').eq(6).text(precio*$(this).val());
        /*Es la variable del total que va sumar los subtotales */ 
        var total=0;
        /*Recorrer el subtotal para sumar los subtotales */
        $(".subtotal").each(function()
        {
            total+=parseFloat($(this).html());
        });
        /*Pasar el total al text de total*/
        $("#total").text(total+"€");
    });
    /*sacar los objetos del localStorage a item.*/
    var item=JSON.parse(localStorage.getItem('carrito'));
    /*Este es el bucle sirve para recorrer de item y comprueba si ha encontrado
    el nombre del item que va a eliminar el item*/
    for(var i=0;i<item.length;i++)
    {
        if(item[i].nombre==nombre)
        {
            /*Cambia el contenido del item eliminado elemento existente*/
            item.splice(i,1);
        }
    }
    /*
    Este sirve para guardar los objetos de localStorage
    */
    localStorage.setItem('carrito',JSON.stringify(item)); 
}
/*Esta es la funcion sirve para sumar los subtotales*/
function sumar()
{
    var total=0;
    $(".subtotal").each(function()
    {
        total+=parseFloat($(this).html());
    });
    /*Pasar el total al texto de total*/
    $("#total").text(total+"€");
}

