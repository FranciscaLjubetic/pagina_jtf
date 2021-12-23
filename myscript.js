$(document).ready(function(){

    
    $('#gifi').hide();
    $('#textloading').html('click to start');
    $( "#primera_pantalla" ).hide();
    $( "#todo_lo_demas" ).show();
    

    $( "#titulo_neon" ).on('click', 
        function() {
            $( "#primera_pantalla" ).hide();
            $( "#todo_lo_demas" ).show();
        
        }
    );

    

    
    
    $( "#contacto" ).on('click', 
        function() {
        $( "#cajaformulario").fadeIn();
        }
    );
    
    $( "#nosotros" ).hover( 
        function() {
        $( "#nosotrostexto" ).toggle();
        }
    );

    $( "#vision" ).on('click', 
        function() {
        $( "#visiontexto" ).toggle();
        }
    );

    $( "#mision" ).on('click', 
        function() {
        $( "#misiontexto" ).toggle();
        }
    );


    $( "#valores" ).on('click', 
        function() {
        $( "#valorestexto" ).toggle();
        }
    );

    $( "#objestrategicos" ).on('click', 
        function() {
        $( "#objestrategicostexto" ).toggle();
        }
    );

    $( "#servicios" ).on('click',
        function() {
        $( "#serviciostexto" ).toggle();
        }
    );

    

    $('#botonenviar').on('click',function(evento){
        evento.preventDefault();

        $(".toast").toast("show");
    });

            
})

/*jQuery(document).ready(function( $ ) {
$('.fondo-efecto-ondas').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.01,
});
});*/

