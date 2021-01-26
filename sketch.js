function setup() {
  createCanvas(490, 490);
  button = createButton("START");
  button.position(20, 425);
  button.size(80, 30);
  button.mousePressed(solucionaJogo);
  noLoop();
}

function draw() {
  iniciaJogo();
}  

function iniciaJogo() {
  background(255);
  desenhaTabuleiro(xInicial, yInicial, 70);
  desenhaPecas();
  coloreCantosTabuleiro();
  venceuJogo();
}
