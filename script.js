var alturaDaTela = window.innerHeight;
var larguraDaTela = window.innerWidth;
//variaveis da bolinha:
var xBolinha = 747.5;
var yBolinha = 357.5;
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var diametroBolinha = 30;
var raioDaBolinha = diametroBolinha/2;
//variáveis da raquete:
var yRaquete = 250;
var xRaquete = 26;
var comprimentoRaquete = 26;
var alturaRaquete = 250;

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
}
function draw() {
    background(0);
    desenhaBolinha();
    movimentaBolinha();
    colisaoBolinha();
    desenhaRaquete();
    moveRaquete();
    colisaoBordaRaquete();
    verificaColisaoRaquete();
}
function desenhaBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}
function desenhaRaquete() {
    rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}
function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha
}
function colisaoBolinha() {
        if (xBolinha + raioDaBolinha > width || xBolinha - raioDaBolinha < 0) {
        velocidadeXBolinha *= -1;
        }
        if (yBolinha + raioDaBolinha > height || yBolinha - raioDaBolinha < 0) {
    velocidadeYBolinha *= -1;
        }
}
function moveRaquete() {
        if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
        }
        if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
        }
}
console.log(alturaDaTela)
function colisaoBordaRaquete() {
        if (yRaquete <= 0) {
            yRaquete += 10;
        }
        if (yRaquete >= 460) {
            yRaquete -= 10;
        }
}
function verificaColisaoRaquete() {
    if (xBolinha - raioDaBolinha < xRaquete + comprimentoRaquete
        && yBolinha - raioDaBolinha < yRaquete + alturaRaquete
        && yBolinha + raioDaBolinha > yRaquete) {
        velocidadeXBolinha *= -1;
        }
}