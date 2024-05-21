
//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a = prompt("first number");
let b = prompt("second number");

if (a<b){
    console.log(a)
}else {
    console.log(b)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let esercizio2=  prompt("inserisci numero");

    if (esercizio2<5) {
        console.log("Tiny");
    } else if (esercizio2 <10) {
        console.log ("Small");
    } else if (esercizio2 <15) {
        console.log("Medium");
    } else if (esercizio2 <20) {
        console.log("Large");
    } else {
        console.log("Huge");
    }
//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0;i<11;i++) {
    if(i===3) {
        continue
    } if (i===8){
        continue
    }
    console.log(i);
}

   
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let i=0; i<=15;i++){
    if(i %2===0) {
        console.log((i),"pari");
    } else {
        console.log((i),"dispari");
    }
    
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function  verifica(number1,number2){
    if(number1 === 8 || number2===8){
        console.log("uno dei 2 valori è 8");
    }
    
    if((number1 + number2 ===8) || (number1 - number2 ===8)){
        console.log("FA 8");
    }
}

verifica(4, 8);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let totalShoppingCart= Number(prompt("total cart"));
const shippingCost= 10;
    if(totalShoppingCart<=50){
        console.log(shippingCost + totalShoppingCart)
    } else {
        console.log(totalShoppingCart)
    }


/** let totaleCarrello= 49;

function calcolaTotale(totaleCarrello) {
        let costoSpedizione= 10;
        let prezzoFinale;

        if(totaleCarrello>50) {
            costoSpedizione=0;
        }
       prezzoFinale= totaleCarrello + costoSpedizione;
       return prezzoFinale;
}

console.log("il totale speso è " + calcolaTotale(totaleCarello));**/
 /*   
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let totaleCarrello = 49;

function calcolaTotale(totaleCarrello) {
        const scontoBlackFriday = 0.8;
        let costoSpedizione= 10;

        let prezzoFinale;
        let prezzoScontato
        prezzoScontato= totaleCarrello * scontoBlackFriday;
        if(totaleCarrello>50) {
            costoSpedizione=0;
        }
       prezzoFinale= totaleCarrello + costoSpedizione;
       return prezzoFinale;
}

console.log("il totale speso è " + calcolaTotale(totaleCarello));
/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
let isMale = true;

let gender = isMale ? "male" : "female";

console.log(gender);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/