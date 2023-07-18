// Chiedi all’utente il suo nome
const username =prompt("Inserisci il tuo nome utente");
console.log(username, typeof username)

// Chiedi il suo cognome
const lastname =prompt("Inserisci il tuo cognome");
console.log (lastname, typeof lastname)

// Chiedi il suo colore preferito
const colorUser =prompt("Inserisci il tuo colore preferito")
console.log(colorUser,typeof colorUser)

// Infine scrivi sulla pagina che la password è composta in questo modo
// `nomecognomecolorepreferito21`
let password =`La password suggerita risulta essere ${username}${lastname}${colorUser}21`;

// Trascriviamo in html la password suggerita dall'algoritmo
document.getElementById ("pass-generate").innerHTML =password;
