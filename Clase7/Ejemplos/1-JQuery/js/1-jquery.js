$(document).ready(function(){
    $("body").text("Hola mundo!");

    for (var i = 0; i < 10; i++) 
        $("body").append($("<p></p>").text("This has gone through the loop completely: " + i + " times"))
    
    
    $("p").click(function(){
        if($(this).css("background-color") == "rgb(0, 0, 255)"){
            $(this).css("background-color","yellow");
        }else {
            $(this).css("background-color","blue");
        }
    })
});

