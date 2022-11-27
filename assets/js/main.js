function capture() {
  html2canvas(document.body, {
    onrendered: function (canvas) {
      var image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      var a = document.createElement('a');
      a.href = image;
      a.download = 'Planner.png';
      a.click();
    },
  });
  //   html2canvas(document.querySelector('#conteudo'), {
  //     onrendered: function(canvas) {
  //       return Canvas2Image.saveAsPNG(canvas);
  //     }
  // });
}

function funcaoTexto() {
  for (let i = 0; i < 7; i++) {
    //Substituir a textarea por uma variavel com o seu conteúdo
    var x = document.getElementById('areatexto').value;
    document.getElementById('texto').innerHTML = x;

    //Trocar background do texto
    document.getElementById('texto').id = 'texto2';
    //Remover a textarea do DOM
    const b = document.getElementById('areatexto');
    b.parentNode.removeChild(b);

    //container 2
    var y = document.getElementById('areatexto2').value;
    document.getElementById('texto3').innerHTML = y;

    document.getElementById('texto3').id = 'texto4';

    const c = document.getElementById('areatexto2');
    c.parentNode.removeChild(c);

    document.getElementById('botoes').style.display = 'none';
  }
}

function limpar() {
  window.location.refresh();
}

function callFunctions(){
    funcaoTexto();
    capture();
}