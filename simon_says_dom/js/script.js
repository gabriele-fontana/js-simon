//mostrare 5 numeri in pagina
const numbers = document.getElementById('numbers-list')

numbers.innerHTML = `
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
`;
//crea array con numeri generati casualmente
const listItems = document.querySelectorAll('#numbers-list li'); /* seleziona tutti gli <li> */
const randomNumb =[]
for (let i = 0; i < listItems.length; i++) {
    const numb = parseInt(listItems[i].innerText);
    randomNumb.push(numb)
    
}
console.log(randomNumb);

//nascondere i numeri e il messaggio dopo 30 secondi
//mostrare il form dopo 30 secondi
const numbImputs = document.getElementById('answers-form')
const message = document.getElementById('instructions')
setTimeout(function(){
    numbers.classList.add('d-none')
    message.classList.add('d-none')
    numbImputs.classList.remove('d-none')
},3000)

//aggiungi interazione con il submit del form
const inputEl = document.querySelectorAll('#input-group input');


numbImputs.addEventListener('submit', function(){
    event.preventDefault() //blocca il refresh della pagina al submit
    let UserNumbers = []; /* array vuoto per contenere i numeri inseriti dall'utente */    
    for (let i = 0; i < inputEl.length; i++) {
        const value = parseInt(inputEl[i].value);
        UserNumbers.push(value);
        
    }/* inserisci i numeri nell'array vuoto */
    console.log(UserNumbers);
    
})