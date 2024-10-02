const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value

    })
})

// função limpar o "display"
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus() //  foca no elemento automaticamente
})

input.addEventListener('keydown', function(ev){
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
})
document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    const resultado = eval(input.value)
    resultInput.value = resultado
    resultInput.classList.remove('error')

}

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
        return
    }
    if (button.innerText !== 'Copy'){
        button.innerText = 'Copy'
        button.classList.remove('success')
        return
    }
        
    
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#0066cc")
        root.style.setProperty("--font-color", "#003366")
        root.style.setProperty("--primary-color", "#0066ff")
        root.style.setProperty("--equal-color", "#ff8c00")
        main.dataset.theme = "light"
        return
      } 
      if (main.dataset.theme === 'light'){
        root.style.setProperty("--bg-color", "#000000")
        root.style.setProperty("--border-color", "#66b2ff")
        root.style.setProperty("--font-color", "#66b2ff")
        root.style.setProperty("--primary-color", "#003bff")
        root.style.setProperty("--equal-color", "darkorange")
        main.dataset.theme = "dark"
        return
      }
})