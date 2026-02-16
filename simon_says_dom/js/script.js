//mostrare 5 numeri in pagina
const numbers = document.getElementById('numbers-list')

numbers.innerHTML = `
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
`;
 
//nascondere i numeri e il messaggio dopo 30 secondi
//mostrare il form dopo 30 secondi
const numbImputs = document.getElementById('answers-form')
const message = document.getElementById('instructions')
setTimeout(function(){
    numbers.classList.add('d-none')
    message.classList.add('d-none')
    numbImputs.classList.remove('d-none')
},3000)

