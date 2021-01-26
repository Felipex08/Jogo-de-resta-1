// variável dos movimentos

var intervaloDeTempo = 1000;
  
// código que movimenta as minhas peças

  function solucionaJogo() {
      function movimentos(peca, eixo, mov, pecaApagada, t) {
        setTimeout(function(){
          
          if(mov == "cima") {
            if(xYBolinha[peca][eixo] > xYBolinha[peca][eixo] - 140) {
              xYBolinha[peca][eixo] -= 140;
              apagaPeca(pecaApagada);
              totalPecas -= 1;
            }  
          }
          if(mov == "baixo") {
            if(xYBolinha[peca][eixo] < xYBolinha[peca][eixo] + 140) {
              xYBolinha[peca][eixo] += 140;
              apagaPeca(pecaApagada);
              totalPecas -= 1;
            }  
          }
          if(mov == "esquerda") {
            if(xYBolinha[peca][eixo] > xYBolinha[peca][eixo] - 140) {
              xYBolinha[peca][eixo] -= 140;
              apagaPeca(pecaApagada);
              totalPecas -= 1;
            }  
          }
          if(mov == "direita") {
            if(xYBolinha[peca][eixo] < xYBolinha[peca][eixo] + 140) {
              xYBolinha[peca][eixo] += 140;
              apagaPeca(pecaApagada);
              totalPecas -= 1;
            }  
          }
          iniciaJogo();
        }, t);  
    }

    movimentos(18, 0, "esquerda", 17, intervaloDeTempo);
    movimentos(15, 0, "direita", 18, intervaloDeTempo * 2);
    movimentos(13, 0, "direita", 14, intervaloDeTempo * 3);
    movimentos(28, 1, "cima", 23, intervaloDeTempo * 4);
    movimentos(28, 0, "esquerda", 13, intervaloDeTempo * 5);
    movimentos(27, 1, "cima", 22, intervaloDeTempo * 6);
    movimentos(20, 0, "direita", 21, intervaloDeTempo * 7);
    movimentos(7, 1, "baixo", 28, intervaloDeTempo * 8);
    movimentos(9, 0, "esquerda", 8, intervaloDeTempo * 9);
    movimentos(6, 0, "direita", 9, intervaloDeTempo * 10);
    movimentos(11, 0, "esquerda", 10, intervaloDeTempo * 11);
    movimentos(24, 1, "cima", 15, intervaloDeTempo * 12);
    movimentos(11, 0, "direita", 24, intervaloDeTempo * 13);
    movimentos(2, 1, "baixo", 5, intervaloDeTempo * 14);
    movimentos(0, 0, "direita", 1, intervaloDeTempo * 15);
    movimentos(26, 0, "esquerda", 25, intervaloDeTempo * 16);
    movimentos(12, 1, "baixo", 19, intervaloDeTempo * 17);
    movimentos(27, 1, "baixo", 20, intervaloDeTempo * 18);
    movimentos(3, 1, "baixo", 6, intervaloDeTempo * 19);
    movimentos(30, 1, "cima", 27, intervaloDeTempo * 20);
    movimentos(3, 1, "baixo", 30, intervaloDeTempo * 21);
    movimentos(32, 0, "esquerda", 31, intervaloDeTempo * 22);
    movimentos(32, 1, "cima", 3, intervaloDeTempo * 23);
    movimentos(7, 0, "direita", 32, intervaloDeTempo * 24);
    movimentos(7, 0, "direita", 26, intervaloDeTempo * 25);
    movimentos(12, 0, "esquerda", 7, intervaloDeTempo * 26);
    movimentos(29, 1, "cima", 12, intervaloDeTempo * 27);
    movimentos(29, 1, "cima", 2, intervaloDeTempo * 28);
    movimentos(0, 1, "baixo", 29, intervaloDeTempo * 29);
    movimentos(11, 0, "esquerda", 0, intervaloDeTempo * 30);
    movimentos(4, 1, "baixo", 11, intervaloDeTempo * 31);
  }

function venceuJogo() {
  if(totalPecas == 1) {
    venceu();
  }  
}