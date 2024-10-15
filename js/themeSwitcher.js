export default function(){
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

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
}