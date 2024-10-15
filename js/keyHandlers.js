import calculate from "./calculate.js"

const input = document.querySelector('#input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value

}
// função limpar o "display"
export function focusClear(){
    input.value = ''
    input.focus() //  foca no elemento automaticamente
}

export function keyDown(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1) // retorna a função ate o penultimo caracter
    }
    if (ev.key === 'Enter'){
        calculate()
    }
}