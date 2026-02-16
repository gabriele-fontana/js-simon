//mostrare 5 numeri in pagina
const numbers = document.getElementById('numbers-list')

numbers.innerHTML = `
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
    <li>${Math.floor(Math.random() * 50)}</li>
`;
