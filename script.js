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

//variáveis do oponente
var xRaqueteOponete = larguraDaTela - 52;
var yRaqueteOponete = 250;
var velocidadeYOponente;

//placar
var meusPontos = 0;
var pontosDoOponente = 0;

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
}
function draw() {
    background(0);
    desenhaBolinha();
    movimentaBolinha();
    colisaoBolinha();
    desenhaRaquete(xRaquete, yRaquete);
    desenhaRaquete(xRaqueteOponete, yRaqueteOponete);
    moveRaquete();
    verificaColisaoRaquete();
    movimentaRaqueteOponente();
    verificaColisaoRaqueteOponente();
    incluiPlacar();
    sistemaDePontuação();
}
function desenhaBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}
function desenhaRaquete(x,y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
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
    //Impede que a raquete saia da tela
    yRaquete = constrain(yRaquete, 10, 450);
}
function verificaColisaoRaquete(x, y) {
    if (xBolinha - raioDaBolinha < xRaquete + comprimentoRaquete
        && yBolinha - raioDaBolinha < yRaquete + alturaRaquete
        && yBolinha + raioDaBolinha > yRaquete) {
        velocidadeXBolinha *= -1;
        }
}
function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponete - comprimentoRaquete / 2 - 30;
    yRaqueteOponete += velocidadeYOponente

    if (yRaqueteOponete - comprimentoRaquete <= -10) {
        yRaqueteOponete = 10;
    }
    if (yRaqueteOponete + comprimentoRaquete >= 470) {
        yRaqueteOponete = 450;
    }
    //Impede que a raquete do oponente saia da tela
    yRaqueteOponete = constrain(yRaqueteOponete, 5, 460);
}
function verificaColisaoRaqueteOponente(x, y) {
    if (xBolinha - raioDaBolinha > xRaqueteOponete - comprimentoRaquete
        && yBolinha - raioDaBolinha < yRaqueteOponete + alturaRaquete
        && yBolinha + raioDaBolinha > yRaqueteOponete) {
        velocidadeXBolinha *= -1
    }
}
function incluiPlacar() {
    fill(255);
    text(meusPontos, 697,5, 30);
    text(pontosDoOponente, 797,5, 30)
}
function sistemaDePontuação() {
    if(xBolinha + raioDaBolinha >= larguraDaTela) {
        meusPontos += 1;
    }
    if(xBolinha + raioDaBolinha <= 25) {
        pontosDoOponente += 1;
    }
}