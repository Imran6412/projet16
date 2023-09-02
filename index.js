console.log('bonjour');
let maVariable = "marchand de glace";
console.log(maVariable);

let chiffre = 25;
console.log(chiffre);
let lettre = `bonjour ${chiffre} `;
console.log(lettre);

let array = ["je", "suis", 26, false];
console.log(typeof array);

let arbre = null;
console.log(arbre);

console.log(100-20);
console.log(4 ** 5);

let total = 5;
let x = 3;
total *= ++x;
console.log(total);

let v = 5;
let y = 4;
if(v < y){
    console.log("v est inferieur a y");
}else{ 
    console.log("v est superieur a y");
}

let c=3;
let d=30;
if(c===d){
    console.log("vrai");
}
else if (c==d){
    console.log("c et d ont la meme valeur");
}
else{
    console.log(c + "et" + d + "sont different");
}

let a=5;
let b="5";
a==b ? console.log("vrai"):console.log("faux");

function faireTruc() {
    console.log("au travail");
    console.log("au champs");
    console.log(25);
}
faireTruc();

const faireTache = (tache) =>{
    console.log("je fais " + tache);
}
faireTache("les courses");
faireTache("le menage");

(function maClasse(){
    console.log("je dois me laver");
})(); 

(()=>{
    console.log("jai fini de manger");
})();

let relax=3;
function addition(m){
    relax+=m;
    return relax;
}
function soustraction(m){
relax-=m;
    return relax;
}
function multiplication(m){
    if (relax===0){
        return (relax=m);
    }
    else{
    relax*=m;
    return relax;
}
}

function division(m){
    if (relax===0){
        return (relax=m);
    }
    else{
    relax/=m;
    return relax;
}
   
}
function reset(){
    relax=0;
}
