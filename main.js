
let numeroKilometri = prompt("Inserisci il numero di chilometri da percorrere");
numeroKilometri=parseInt(numeroKilometri);
console.log(numeroKilometri);
let età =prompt("Inserisci l'età del passeggero");
età=parseInt(età);
console.log(età);
let prezzoNonScontato = numeroKilometri*0.21;
console.log(prezzoNonScontato);
let scontoMinorenni=prezzoNonScontato*0.2;
console.log(scontoMinorenni);
let scontoMaggiori65=prezzoNonScontato*0.4;
console.log(scontoMaggiori65);
let prezzoTotaleViaggio;

  if (anni<18){
     alert("Sei minorenne");
    prezzoTotaleViaggio=prezzoNonScontato-scontoMinorenni;
} else if (anni>=65){
    alert("Hai un'età maggiore di 65");
    prezzoTotaleViaggio=prezzoNonScontato-scontoMaggiori65;
} else {
    alert("Non è possibile ottenere uno sconto");
    prezzoTotaleViaggio=prezzoNonScontato;
}
console.log(prezzoTotaleViaggio + "Ecco  il prezzo inerente al tuo viaggio");