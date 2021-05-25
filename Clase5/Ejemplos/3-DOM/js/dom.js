window.onload = function () {
  var bod = document.body;
  // es más divertido si es una página al azar que ya incluya cosas en ella (como la plataforma de aprendizaje, por ejemplo).
  bod.innerHTML = "Hello World";

  for (var i = 0; i < 10; i++) {
    bod.innerHTML +=
      "<p>This has gone through the loop completely: " + i + " times</p>";
  }

  var paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", function () {
      if(this.style.background == "blue")
        this.style.background = "yellow";
      else
        this.style.background = "blue";
    });
  }
};
