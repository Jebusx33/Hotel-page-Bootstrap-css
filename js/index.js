//Jquery para los tooltip, popover y carrusel

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 2000
    });
    /*1.script que registra por console las activaciones de todos los eventos del modal
    (cuando comienza a abrirse, cuando se terminó de abrir, cuando comienza a ocultarse y cuando se terminó de ocultar).*/
    $('#contact').on('show.bs.modal', function (e) {
        // do something...
        console.log("El modal comienza a abrirse");
        //elimina una clase
        /* el botón que activa el modal se inhabilita y cambia de color sobre el evento de apertura del modal.*/
        $("#contactoBtn").removeClass('btn-outline-success');
        //agrega una clase
        $("#contactoBtn").addClass('btn-primary');
        //desabilitar una propiedad
        $('#contactoBtn').prop('disabled', true);
    })
    $('#contact').on('shown.bs.modal', function (e) {
        // do something...
        console.log("El modal se terminó de abrir");
    })
    $('#contact').on('hide.bs.modal', function (e) {
        // do something...
        console.log("El modal comienza a ocultarser");
    })
    $('#contact').on('hidden.bs.modal', function (e) {
        // do something...
        /*3.el botón que activa el modal se vuelve a activar y pasa al color original sobre el evento de cierre del modal */
        console.log("El modal se terminó de ocultar");
        $("#contactoBtn").removeClass('btn-primary');
        $("#contactoBtn").addClass('btn-outline-success');
        $('#contactoBtn').prop('disabled', false);
    })



});