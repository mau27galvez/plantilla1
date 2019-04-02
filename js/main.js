$(document).ready(function () 
{
    //Slider
    if(window.location.href.indexOf("index")>-1)
    {
        $(".bxslider").bxSlider({
            mode: "fade",
            captions: true,
            slideWidth: 1200
        });    
    }

    //pots
    if(window.location.href.indexOf("index")>-1)
    {
        var posts = 
        [
            {
                title: "Prueba de titulo 1",
                date: moment().format("MMMM Do YYYY"),
                content: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)." 
            },
            {
                title: "Prueba de titulo 2",
                date: moment().format("MMMM Do YYYY"),
                content: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)." 
            },
            {
                title: "Prueba de titulo 3",
                date: moment().format("MMMM Do YYYY"),
                content: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)." 
            },
            {
                title: "Prueba de titulo 4",
                date: moment().format("MMMM Do YYYY"),
                content: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)." 
            },
            {
                title: "Prueba de titulo 5",
                date: moment().format("MMMM Do YYYY"),
                content: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)." 
            },
        ];

        posts.forEach((item, indice)=>
        {
            var articulo = 
            `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
            `;

            $("#posts").append(articulo);
        });
    }
    
    //selectores de tema
    var tema = $("#theme");
    
    $("#to-green").click(function()
    {
        tema.attr("href", "css/green.css");
    });

    $("#to-red").click(function()
    {
        tema.attr("href", "css/red.css");
    });

    $("#to-blue").click(function()
    {
        tema.attr("href", "css/blue.css");
    });

    //scroll arriba de la web
    $(".subir").click(function(e)
    {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500
        );
        return false;
    });

    //login falso
    $("#login form").submit(function()
    {
        console.log("sucedio");
        
        var form_name = $("#name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name!="" && form_name!=null && form_name!=undefined)
    {
        var about_parrafo = $("#about p");
        about_parrafo.html("Bienvenido, " +form_name);
        about_parrafo.append("<br /><a href='#' id='logout'>Cerrar secion</a>");
        $("#login").hide();

        $("#logout").click(function()
        {
            localStorage.clear();
            location.reload();
        });
    }

    if(window.location.href.indexOf("about")>-1)
    {
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf("reloj")>-1)
    {
        setInterval(()=>
        {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },1000);    
    }

    //validacion
    if(window.location.href.indexOf("contact")>-1)
    {
        $("form input[name='date']").datepicker({dateFormat: "dd/mm/yy"});
        $.validate({lang: "es"})
    }

});
