var alturaDaTela = window.innerHeight;
var larguraDaTela = window.innerWidth;
//variaveis da bolinha:
var xBolinha = 747.5;
var yBolinha = 357.5;
var velocidadeXBolinha = 10;
var velocidadeYBolinha = 10;
var diametroBolinha = 30;
var raioDaBolinha = diametroBolinha/2;
//variáveis da raquete:
var yRaquete = 330;
var xRaquete = 26;
var comprimentoRaquete = 26;
var alturaRaquete = 170;

//variáveis do oponente
var xRaqueteOponete = larguraDaTela - 52;
var yRaqueteOponete = 330;
var velocidadeYOponente;
var chanceDeErrar = 0;

//variáveis do placar
var meusPontos = 0;
var pontosDoOponente = 0;

//variáveis de som
var raquetada;
var ponto;
var trilha;

function preload() {
    trilha = loadSound("trilha.mp3")
    raquetada = loadSound("raquetada.mp3")
    ponto = loadSound("ponto.mp3")
}

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
    trilha.loop()
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
        ;velocidadeXBolinha *= -1;
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
    yRaquete = constrain(yRaquete, 10, 530);
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
        raquetada.play();
        }
}
function movimentaRaqueteOponente() {
    //IA
    velocidadeYOponente = yBolinha - yRaqueteOponete - comprimentoRaquete / 2 - 30;
    yRaqueteOponete += velocidadeYOponente + chanceDeErrar;
    calculaChanceDeErrar();

    //Multiplayer local
    /*if (keyIsDown(87)) {
        yRaqueteOponete -= 10;
        }
    if (keyIsDown(83)) {
        yRaqueteOponete += 10;
        }*/
    //Impede que a raquete do oponente saia da tela
    yRaqueteOponete = constrain(yRaqueteOponete, 5, 530);
}
function verificaColisaoRaqueteOponente(x, y) {
    if (xBolinha - raioDaBolinha > xRaqueteOponete - comprimentoRaquete
        && yBolinha - raioDaBolinha < yRaqueteOponete + alturaRaquete
        && yBolinha + raioDaBolinha > yRaqueteOponete) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(30);
    fill(color(255,140,0));
    rect(265, 20, 70, 30);
    rect(1160, 20, 70, 30);
    fill(255);
    text(meusPontos, 300, 45);
    text(pontosDoOponente, 1195, 45);
}
function sistemaDePontuação() {
    if(xBolinha + raioDaBolinha >= larguraDaTela) {
        meusPontos += 1;
        ponto.play();
    }
    if(xBolinha + raioDaBolinha <= 25) {
        pontosDoOponente += 1;
        ponto.play();
    }
}
function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
        chanceDeErrar += 1
    if (chanceDeErrar >= 39){
        chanceDeErrar = 40
    }
  } else {
        chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
        chanceDeErrar = 35
    }
  }
}