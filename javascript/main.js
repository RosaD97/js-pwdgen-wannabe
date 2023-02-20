'use strict';
// ************************
// // Step1:
// // Chiedo nome e lo salvo in una variabile.
// // Step2:
// // Chiedo cognome e lo salvo in una variabile.
// // Step3:
// // Chiedo colore preferito e lo salvo in una variabile.
// // Step4:
// // Chiudo e stampo i valori ricavati nella pagina.
// ************************


// Valori da inserire
const nome = prompt('Inserisci il tuo nome');
const cognome  = prompt('Inserisci il tuo cogmone');
const colorePreferito = prompt('Inserisci il tuo colore preferito');

// Valori nome e cognome utente stampati in header
const utente = `${nome} ${cognome}`;
console.log(utente);
document.querySelector('.nomeUtente').innerHTML = utente;
// Generazione password
const passwordGenerata = nome + cognome + colorePreferito + 89;
console.log(passwordGenerata);
document.querySelector('.password').innerHTML = passwordGenerata;
