
function addName(){
    //evt.preventDefault();
    var name = document.getElementById("nombre").value;
    document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
    alert("Nombre ingresado");
}