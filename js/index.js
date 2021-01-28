/*Este es el objeto de modelismo */
modelismos=[
    {
        "tipo":"tren",
        "nombre":"Estación de Ochsenhausen",
        "id":"estacion",
        "direccion":"tren.html",
        "imagen":"estacion.jpg",
        "alt":"Estación de Ochsenhausen",
        "descripcion":"Edificio de la estación de dos plantas con enlucido tosco en fachada, cornisa en el primer piso y revestimiento de madera en el piso superior formando la buhardilla. Un cobertizo de mercancías con plataforma de carga alrededor y un refugio para bicicletas complementan la estación como extensiones contiguas.",
        "descripcion2":"Este kit de construcción contiene: 293 piezas individuales en 10 colores, piezas de ventana, 1 máscara de papel y 1 instrucción de construcción.",
        "descripcion3":"Se utiliza para manualidades FALLER - plástico- y cola de corte láser.",
        "marca":"FALLER",
        "categoria":"Estación de tren",
        "dimension":"165 x 78 x 78 mm",
        "escala":"N",
        "precio":"40"
    },
    {
        "tipo":"tren",
        "nombre":"Vagón plataforma RENFE con traviesas de hormigón HN6503 Arnold Escala N",
        "id":"vagonMercancia",
        "direccion":"tren.html",
        "imagen":"vagon.jpg",
        "alt":"Vagón plataforma RENFE con traviesas de hormigón HN6503 Arnold Escala N",
        "descripcion":"Vagón plataforma RENFE con traviesas de hormigón HN6503 Arnold Escala N.",
        "marca":"ARNOLD",
        "categoria":"Vagón mercancia",
        "dimension":"131mm",
        "escala":"N",
        "precio":"35"
    },
    {
        "tipo":"avion",
        "nombre":"Airbus A330-900neo",
        "id":"a330900",
        "direccion":"avion.html",
        "alt":"TAP A330-900neo",
        "imagen":"a330-900neo.jpg",
        "descripcion":"Para celebrar la adquisición del avión número 100 de su flota, el A330neo registrado en CS-TUI recibió un gran \"100\" en su fuselaje. Con este tipo de aeronaves, TAP no solo renueva su flota de largo radio, sino que también se enfoca en la expansión a nuevos destinos en todo el mundo.",
        "marca":"Herpa",
        "categoria":"Avión Comercial",
        "dimension":"120mm",
        "escala":"1:500",
        "peso":"143g",
        "precio":"37"
    },
    {
        "tipo":"avion",
        "nombre":"GREAT HALL LOS ANGELES - TOM BRADLEY INTERN. TERMINAL",
        "id":"terminal",
        "direccion":"avion.html",
        "alt":"Terminal de Aeropuerto de Los Angeles",
        "imagen":"terminal.jpg",
        "descripcion":"La autorización de aterrizaje para sus modelos se encuentra en LAX: ahora puede recrear la Terminal Internacional de Los Ángeles en una escala de 1: 500. Además de las láminas de cartón y las pequeñas piezas de plástico, cada uno de los cuatro conjuntos será una placa base detallada. El corazón de la Terminal Internacional Tom Bradley es la gran sala con sus distintivas e imponentes estructuras de techo. Eso significa que las dos puertas en el área central, ambas con un puente de embarque de pasajeros diferente. Se incluye placa de 40 x 40 cm e instrucciones de montaje central.",
        "marca":"Herpa",
        "categoria":"Terminal de aeropuerto",
        "dimension":"40x40cm",
        "escala":"1:500",
        "peso":"286g",
        "precio":"40" 
    },
    {
        "tipo":"coche",
        "nombre":"AUDI A1® SPORTBACK, SCUBABLAU METALIZADO",
        "id":"audi",
        "direccion":"coche.html",
        "alt":"Audi A1",
        "imagen":"audi.jpg",
        "marca":"Herpa",
        "categoria":"Coche",
        "dimension":"120mm",
        "escala":"1:87",
        "peso":"13,7g",
        "precio":"16"
    },
    {
        "tipo":"coche",
        "nombre":"BMW X5™, SCHWARZMETALLIC",
        "id":"bmw",
        "direccion":"coche.html",
        "alt":"BMW X5",
        "imagen":"bmw.jpg",
        "descripcion":"El vehículo es un desarrollo completamente nuevo y en términos de forma no tiene nada que ver con su predecesor. Artículo producido en diferentes colores. El color entregado puede diferir de la imagen.",
        "marca":"Herpa",
        "categoria":"Coche",
        "dimension":"120mm",
        "escala":"1:87",
        "peso":"13,7g",
        "precio":"16" 
    },
    {
        "tipo":"barco",
        "nombre":"Barco de Guerra BISMARCK RC-Boo / ARR 1:200 CARSON",
        "id":"barcoGuerra",
        "direccion":"barco.html",
        "alt":"Barco de Guerra",
        "imagen":"barcoGuerra.jpg",
        "descripcion":"El Bismarck ofrece una longitud de alrededor de 130 cm, muchos detalles. La estructura de la plataforma superior del modelo a escala 1: 200 muestra salvamento y botes, torretas, superestructuras y equipos técnicos. La barandilla de metal fotograbado. Tres motores eléctricos tipo 380 impulsan las hélices, que están controladas en paralelo por un acelerador de 50 A resistente al agua. Detrás se encuentra, como en el original, el mecanismo de dirección, que también está controlado por un servo de 3 kg resistente al agua. Se sirve terminado y pintado, solo se debe instalar una emisora  RC. Tres aberturas permiten el acceso a los componentes RC.",
        "marca":"BISMARCK",
        "categoria":"Barco de Guerra",
        "dimension":"1250mm",
        "escala":"1:200",
        "peso":"2960g",
        "precio":"1100"  
    },
    {
        "tipo":"barco",
        "nombre":"BARCO TORPEDERA RC",
        "id":"barcoTorpedera",
        "direccion":"barco.html",
        "alt":"Barco Torpedera",
        "imagen":"barcoTorpedera.jpg",
        "enumDescripcion":"Buque de Guerra de R.C.",
        "enumDescripcion1":"Velocidad:5 Km/h",
        "enumDescripcion2":"Batería de 250 mAh 6V con cargador",
        "enumDescripcion3":"Con luces y muchos detalles",
        "enumDescripcion4":"Todas las funciones incluyendo marcha atrás",
        "marca":"NT",
        "categoria":"Barco de Guerra",
        "dimension":"50x13x16 cm",
        "escala":"1:115",
        "peso":"1000g",
        "precio":"55"  
    }
]
/*
Este sirve para cargar la hora y llamar a la funcion de la hora para mostrar la hora actual.
Este sirve para cargar el menu y los carritos para mostrar la lista de los carritos
Y tambien para cargar el modelismo para mostrar la lista de los modelismo 
Y la flecha de arriba para ir arriba de la pagina
*/
$(document).ready(function(){
    hora();
    cargarModelismo();
    cargarMenu();
    mostrarCarrito();
    cargarTabla();
    flechaArriba();
});
/*
Esta funcion sirve para mostrar la hora actual con el intervalo por 1 segundo 
(1000 milisegundos)
*/
function hora()
{
    var date = new Date();
    var hora = date.toLocaleTimeString('es-ES',{hour: '2-digit',minute:'2-digit',second:'2-digit'});
    var fecha = date.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    $("#horaActual").text(hora+" "+fecha);
    setTimeout("hora()", 1000);
}
/*Esta funcion sirve para el botón cuando pulsa el boton para ir arriba de la pagina 
El boton esta en la parte abajo y la derecha*/
function flechaArriba()
{
    $(window).scroll(function()
    {
        if($(this).scrollTop() > 50)
        {
            $('a.flechaArriba').fadeIn('slow');
        } else {
            $('a.flechaArriba').fadeOut('slow');
        }
    });

    $('a.flechaArriba').click(function()
    {
        $('html,body').animate({scrollTop:0},600);
    });
}
/*
Esta funcion sirve para cargar el menu del nav para mostrar u oculta el menu con el 
slideToogle pero solo los dispositivos (movil, tablet, etc) hasta el ancho de 1024px.
*/
function cargarMenu(){
        $(".menu_bar").click(function()
        {
            $("nav").slideToggle();
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
    mostrarModelismo(modelismos);
}
/*
Esta es la funcion para cargar los datos de modelismo para mostrar las tablas de los precios 
de modelismo
*/
function cargarTabla()
{
    mostrarTablas(modelismos);
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
        cadena+="<td>"+model.precio+"€</td>";
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
    Si hay los objetos del localStorage que tienen sacar los objetos de carrito del localStorage
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
    Este es el bucle sirve para comprobar si hay los objetos del localStorage o no.
    Si hay los objetos del localStorage que tienen sacar los objetos de unidad del carrito del localStorage
    a unidadCarrito.
    Si no hay los objetos del localStorage que tiene crear un array del unidadCarrito
    */
    if(JSON.parse(localStorage.getItem('unidadCarrito')))
    {
        unidadCarrito =JSON.parse(localStorage.getItem('unidadCarrito'));
    } else {
        unidadCarrito = [];
    }
    /*Este es el patchname sirve para obtener la pagina actual*/
    var path = $(location).attr('pathname');
    /*El patchArray es el array del patch que el patch divide el barra / en un array*/
    var pathArray=path.split('/');
   /*
    Este es el bucle sirve para recorrer de listadoModelos y para escribir 
    las etiquetas del HTML y los datos del model (nombre,imagen,precio,etc).
    */
    listadoModelos.forEach(function(model){
        /*
        Este es el bucle sirve para recorrer y comprobar si es la pagina actual y compara con el
        tipo del model que va a crear las cadenas de HTML y los datos del model
        */
        for(var i=0;i<pathArray.length;i++)
        {
            if((pathArray[i]=="tren.html" && model.tipo=="tren") || 
            (pathArray[i]=="avion.html" && model.tipo=="avion") || 
            (pathArray[i]=="barco.html" && model.tipo=="barco") ||
            (pathArray[i]=="coche.html" && model.tipo=="coche"))
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
                cadena += "<p class='pPrecio'><strong>Precio:</strong> "+model.precio+"€</p>";
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
            carrito={"nombre":pinchado,"unidad":1};
            unidadCarrito.push(carrito);
            localStorage.setItem('carrito',JSON.stringify(modelismosCarritos));
            localStorage.setItem('unidadCarrito',JSON.stringify(unidadCarrito));
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
    Si no hay los objetos del localStorage que tiene crear un array del modelismoCarritos de carrito
    */
    if(JSON.parse(localStorage.getItem('carrito')))
    {
        modelismosCarritos =JSON.parse(localStorage.getItem('carrito'));
    } else {
        modelismosCarritos = [];
    }
    /*
    Este es el bucle sirve para comprobar si hay los objetos del localStorage o no.
    Si hay los objetos del localStorage que tienen sacar los objetos del localStorage de unidadCarrito
    a unidadCarritos.
    Si no hay los objetos del localStorage que tiene crear un array del unidadCarritos
    */
    if(JSON.parse(localStorage.getItem('unidadCarrito')))
    {
        unidadCarrito =JSON.parse(localStorage.getItem('unidadCarrito'));
    } else {
        unidadCarrito = [];
    }
    /*
    La cadena sirve para crear las etiqutas de HTML
    Esta cadena sirve para crear uns tabla de los precios de modelismo con el encabazado 
    del grupo de las celdas de la tabla
    He creado una variable suma sirve para calcular los subtotales de los modelismo
    */
    if(modelismosCarritos.length==0)
    {
        var cadena="<p>No existe los carritos</p>";
    } else {
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
                /*
                Este es el bucle sirve para recorrer de unidadCarrito y comprobar el nombre de la unidad
                es igual que el nombre del model que va a insertar el input del tipo numero que la unidad pasa
                al valor del input. 
                */
                unidadCarrito.forEach(function(unidad)
                {
                    if(unidad.nombre==model.nombre)
                    {
                        cadena+="<td><input type='number' name='unidades' class='unidad' value='"+unidad.unidad+"'></td>"; 
                    }
                });
                cadena+="<td class='subtotal'>"+model.precio+"€</td>";
                cadena+="<td><i class='fas fa-trash'></i></td>"
                cadena+="</tr>";
                suma += parseFloat(model.precio);
        });
        cadena+="</table>";
        cadena+="<div><p>Total: </p><p id='total'>"+suma+"€</p></div>";
        cadena+="<a class='btnEnviar' href='index.html'>Enviar</a>";
    }
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
        /*Sacar el nombre desde el padre del hijo de td (numero=1)*/
        var nombre = $(this).parent().parent().children('td').eq(1).text();
        /*Se calcula el precio * la unidad y va a pasar al text del padre del hijo de td 
        (numero=6) */
        $(this).parent().parent().children('td').eq(6).text(precio*$(this).val()+"€");
        /*Sacar la unidad desde el input*/
        var unidades=parseInt($(this).val());
        /*Recorrer la unidadcarrito para comprobar el nombre de la unidad es igual que el nombre y 
        sacar las unidades para almacenar en la unidad */
        unidadCarrito.forEach(function(unidad)
        {
            if(unidad.nombre==nombre)
            {
                unidad.unidad=unidades;
            }
        });
        /*Se actualiza el localStorage cuando se modifica la unidad */
        localStorage.setItem('unidadCarrito',JSON.stringify(unidadCarrito));
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
    /*Este va a calcular el precio * unidad y luego mete el subtotal */
    $(".precio").each(function(index)
    {
        var precio = $(this).text();
        $(".unidad").each(function(indexPrecio)
        {
            var unidad=$(this).val();
            if(index==indexPrecio)
            {
                $(".subtotal").each(function(indexSubtotal)
                {
                    if(index==indexSubtotal)
                    {
                        $(this).text(parseFloat(precio*unidad)+"€");
                    }
                });
            }
        });
    });
    /*Llamar a la funcion sumar sirve para calcular el total de los subtotales */
    sumar();
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
        localStorage.removeItem('unidadCarrito');
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
    var itemUnidad=JSON.parse(localStorage.getItem('unidadCarrito'));
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
    /* Este es el bucle sirve para recorrer de itemUnidad y comprueba si ha encontrado
    el nombre del item que va a eliminar el itemUnidad*/
    for(var i=0;i<itemUnidad.length;i++)
    {
        if(itemUnidad[i].nombre==nombre)
        {
            itemUnidad.splice(i,1);
        }
    }
    /*
    Este sirve para guardar los objetos de localStorage
    */
    localStorage.setItem('carrito',JSON.stringify(item)); 
    localStorage.setItem('unidadCarrito',JSON.stringify(itemUnidad));
    /*Comprueba el item está vacio que va a eliminar el localStorage */
    if(item=="")
    {
        localStorage.removeItem('carrito');
        localStorage.removeItem('unidadCarrito');
        localStorage.clear(); 
        /*
        Va a eliminar la tabla y el boton Enviar
        */
        $("#listaCarrito>table,#listaCarrito>div,#listaCarrito>a").remove();
        /*Muestra el texto que el carrito está vacio */
        var cadena = "<p>No existe los carritos</p>";
        $("#listaCarrito").append(cadena);
    }
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


