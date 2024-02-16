const url_search =
  "https://www.superheroapi.com/api.php/407786381624197/search/";

$(function () {
  $(".button_buscar_id").on("click", function () {
    const valor_input = $("#input_nombre_superhero").val();
    if (valor_input.length == 0) {
      alert("Debes Ingresar algún nombre");
    } else {
      $.ajax({
        type: "GET",
        url: `${url_search}${valor_input}`,
        dataType: "json",
        success: function (response) {
          if (response.response == "success") {
            let dataIds = "";
            response.results.forEach((obj) => {
              dataIds += "<li> id:" + obj.id + "</li>";
            });
            $(".id_resultado").html(dataIds);
          } else {
            alert("Caracter con el nombre dado no ha sido encontrado");
            $(".id_resultado").html("ID");
            $("#input_nombre_superhero").val("");
          }
        },
        error: function (error) {
          alert("No existe data para el Super Heroe ingresado");
        },
      });
    }
  });
});
