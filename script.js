var alturaDaTela = window.innerHeight;
var larguraDaTela = window.innerWidth;
var xBolinha = 747.5;
var yBolinha = 357.5;
var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var diametroBolinha = 30;
var raioDaBolinha = diametroBolinha/2;

console.log(larguraDaTela)

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
}
function draw() {
    background(0);
    desenhaBolinha();
    movimentaBolinha();
    colisaoBolinha();
}
function desenhaBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
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