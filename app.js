const botonSuma = document.querySelector('#sumar');
const botonResta = document.querySelector('#restar');
const botonReset = document.querySelector('#resetear');
const viewer = document.querySelector('#viewer')

let counterValue = document.querySelector('.counter__value').textContent
counterValue = Number(counterValue)

const soundClick = new Audio('public/soundButton.mp3')
const soundReset = new Audio('public/soundReset.mp3')


const sumar = async () => {
    playSound()
    
    counterValue = counterValue + 1
    
    const p = document.createElement('p');
    p.classList.add('counter__value');
    p.textContent = counterValue
    await viewer.removeChild(viewer.firstElementChild)
    viewer.appendChild(p)
}

const restar = () => {
    playSound()
    counterValue = counterValue - 1
    
    const p = document.createElement('p');
    p.classList.add('counter__value');
    p.textContent = counterValue
    viewer.removeChild(viewer.firstElementChild)
    viewer.appendChild(p)
}   

const resetear = () => {
    playReset()
    counterValue = 0
    const p = document.createElement('p');
    p.classList.add('counter__value');
    p.textContent = counterValue
    viewer.removeChild(viewer.firstElementChild)
    viewer.appendChild(p)
}

const playSound = () => {
    soundClick.play()
}
const playReset = () => {
    soundReset.play()
}
botonResta.addEventListener('click', restar);
botonReset.addEventListener('click', resetear);
botonSuma.addEventListener('click', sumar);
soundClick.addEventListener( 'mouseup',playSound)
// document.addEventListener('DOMContentLoaded', sincronizarStorage)