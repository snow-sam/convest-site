const btn = document.querySelector("nav i")
const lista = document.querySelector("nav div")
const links = document.querySelectorAll("nav div a")
let active = false
btn.onclick = () => {
    if (!active) {
        lista.style.zIndex = "100"
        lista.classList.remove("closed")
        links.forEach(link => link.style.display = "inline-block")
    } else {
        lista.classList.add("closed")
        links.forEach(link => link.style.display = "none")
    }
    active = !active
}
