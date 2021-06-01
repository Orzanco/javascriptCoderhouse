let fform = document.getElementById("form-container") 
let show = document.getElementById("show") 
fform.addEventListener("submit", (event)=>{
    event.preventDefault()
    let miVar  = document.getElementById("precio").value
    let miVar2  = document.getElementById("impuesto").value
    localStorage.setItem('Precio skin 1', JSON.stringify(miVar)) 
    localStorage.setItem('Precio skin 2', JSON.stringify(miVar2)) 
})
let generar = document.getElementById("submit") 
generar.addEventListener("click", mostrarEnDocumento) 
function mostrarEnDocumento(){
    let misDatos = JSON.parse(localStorage.getItem('datos')) 
    let ejemplo =`<ul>${misDatos}</ul>` 
    show.innerHTML = ejemplo
}










