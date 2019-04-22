let nav = document.querySelector("nav");
var sqcAleatoria = [0];
let t = 0;
let i;
let cor;

function rdmClr(max, min){
    return Math.floor(Math.random() * (max - min) + 1);
}

function sqcArray(){
for(i; i <= t; i++){
    cor = rdmClr(4,1);
    sqcAleatoria.fill(cor);
    }
t++;
}

nav.onclick = sqcArray;

