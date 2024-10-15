import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipBoard.js"
import { focusClear, handleButtonPress, keyDown } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', focusClear) 
document.querySelector('#input').addEventListener('keydown', keyDown)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)