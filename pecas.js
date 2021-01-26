// variáveis das minhas peças

var diametroBolinha = 30;
var totalPecas = 32;
var xYBolinha = [
                       [175, 35], [245, 35], [315, 35], 
                       [175, 105], [245, 105], [315,105], 
[35, 175], [105, 175], [175, 175], [245, 175], [315, 175], [385, 175], [455, 175], 
[35, 245], [105, 245], [175, 245], [245, 245], [315, 245], [385, 245], [455, 245], 
[35, 315], [105, 315], [175, 315], [245, 315], [315, 315], [385, 315], [455, 315], 
                       [175, 385], [245, 385], [315, 385], 
                       [175, 455], [245, 455], [315, 455]];

// código para exibir as peças no tabuleiro

function desenhaPecas() {
  fill("darkblue");
  for(var p = 0; p < xYBolinha.length; p++) {
      if(p != 16) {
        circle(xYBolinha[p][0], xYBolinha[p][1], diametroBolinha);  
      } 
  }  
}

// função que apaga as peças do tabuleiro

function apagaPeca(z) {
  
  splice(xYBolinha[z]);
  
}
