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

    $( "#vision" ).hover( 
        function() {
        $( "#visiontexto" ).toggle();
        }
    );

    $( "#mision" ).hover( 
        function() {
        $( "#misiontexto" ).toggle();
        }
    );


    $( "#valores" ).hover( 
        function() {
        $( "#valorestexto" ).toggle();
        }
    );

    $( "#objestrategicos" ).hover( 
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

