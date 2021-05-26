$(document).ready(function(){
    $('#boton').click(function(){
        console.log($("#nombre").val())
        $('#listado').append("<li>" + $("#nombre").val() + "</li>")
    });
});