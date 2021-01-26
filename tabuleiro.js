// variáveis do tabuleiro

var xInicial = 0;
var yInicial = 0;

// código que exibe o tabuleiro na tela 

function desenhaTabuleiro(xQuadrado, yQuadrado, tamanho) {
  fill(175);
  for(var x = xQuadrado; x < 450; x += tamanho) {
    for(var y = yQuadrado; y < 450; y += tamanho) {
      square(x, y, tamanho);
    }
  }  
}

function coloreCantosTabuleiro() {
  fill(color(255,100,0));
  rect(0, 0, 140, 140);
  rect(350, 0, 140, 140);
  rect(0, 350, 140, 140);
  rect(350, 350, 140, 140);
}

