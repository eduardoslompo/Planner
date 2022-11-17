// function capture() {
//     let div = document.getElementById('conteudo');

//     html2canvas(div).then((canvas) => {
//         let a = document.createElement("a");
//         a.download = "Planner.png";
//         a.href = canvas.toDataURL("image/png");
//         a.click();
//     });
// }

function capture(){
    $("#download").click();
  }
  
  $(document).ready(function(){
    var element = $("#htmlContent");
  
    $("#download").on('click', function(){
  
      html2canvas(element, {
        onrendered: function(canvas) {
          var imageData = canvas.toDataURL("image/jpg");
          var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
          $("#download").attr("download", "image.jpg").attr("href", newData);
        }
      });
  
    });
  });
  
  
  function funcaoTexto() {
      for (let i = 0; i < 7; i++) {
          //Substituir a textarea por uma variavel com o seu conteúdo
          var x = document.getElementById("areatexto").value;
          document.getElementById("texto").innerHTML = x;
  
          //Trocar background do texto
          document.getElementById('texto').id = 'texto2';
          //Remover a textarea do DOM
          const b = document.getElementById("areatexto");
          b.parentNode.removeChild(b);
  
          //container 2
          var y = document.getElementById("areatexto2").value;
          document.getElementById("texto3").innerHTML = y;
  
          document.getElementById('texto3').id = 'texto4';
  
          const c = document.getElementById("areatexto2");
          c.parentNode.removeChild(c);
      }
  }
  const a = document.getElementById("botao");