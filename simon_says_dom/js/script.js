//crea array con numeri generati casualmente
const randomNumb =[]
while (randomNumb.length < 5) {
    let newNumb = getRandomNumber();
    
    if(!randomNumb.includes(newNumb)){
        randomNumb.push(newNumb)
    }
}
console.log(randomNumb);

//mostrare 5 numeri in pagina
const numbers = document.getElementById('numbers-list')
for (let index = 0; index < randomNumb.length; index++) {
    const li = document.createElement('li');
    li.innerText = randomNumb[index];
    numbers.append(li)
    
}
//nascondere i numeri e il messaggio dopo 30 secondi
//mostrare il form dopo 30 secondi
const numbImputs = document.getElementById('answers-form')
const message = document.getElementById('instructions')
setTimeout(function(){
    numbers.classList.add('d-none')
    message.classList.add('d-none')
    numbImputs.classList.remove('d-none')
    timer.classList.add('d-none')
    clearInterval(intervalId)
},30000)
//visualizza timer di 30 secondi
const timer = document.getElementById('countdown')
let seconds = 30
const intervalId = setInterval(function() {
    seconds--
    timer.innerText = seconds
    console.log(seconds);
},1000)

//aggiungi interazione con il submit del form
const inputEl = document.querySelectorAll('#input-group input');


numbImputs.addEventListener('submit', function(){
    event.preventDefault() //blocca il refresh della pagina al submit
    let UserNumbers = []; /* array vuoto per contenere i numeri inseriti dall'utente */    
    let correctAnswers =[];/* array vuoto per contenere le risposte esatte */
    const resultMessage = document.getElementById('message');
    for (let i = 0; i < inputEl.length; i++) {
        const value = parseInt(inputEl[i].value);
        
         //validation
        if(UserNumbers.includes(value)){
            resultMessage.innerText = `ERRORE! Hai inserito più volte ${value}`
            return 
        }
        /* inserisci i numeri nell'array vuoto */
        UserNumbers.push(value);
     
        //confronto usando includes
        if (randomNumb.includes(value)){
        correctAnswers.push(value)
     }
    }
    // Mostriamo il risultato finale nel paragrafo sotto il bottone
    
    resultMessage.innerText = `Hai indovinato ${correctAnswers.length} numeri! (${correctAnswers.join(', ')})`;
})