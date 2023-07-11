var alturaDaTela = window.innerHeight;
var larguraDaTela = window.innerWidth;
var xBolinha = 747.5;
var yBolinha = 357.5;
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var diametroBolinha = 30;
var raioDaBolinha = diametroBolinha/2;
var yRaquete = 250;

console.log(alturaDaTela)

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
}
function desenhaBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}
function desenhaRaquete() {
    rect(30, yRaquete, 26, 250);
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
function colisaoBordaRaquete() {
        if (yRaquete < height) {
            yRaquete - 1
        }
}