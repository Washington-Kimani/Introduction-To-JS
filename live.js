let button = document.getElementById('button');
let heading = document.getElementById('heading');
let h2 = document.getElementById('h2')
console.log(h2)

// DOM manipulation

button.innerHTML = 'HELLO'
button.style.color = 'red';
button.style.fontSize = '30px';
button.style.background = 'yellow';
button.style.padding = '10px';



button.addEventListener('click',()=>{
    h2.classList.add('hidden')
})