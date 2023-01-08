const generarContraseña = (base, tamaño) => {
    let contraseña = ""
    for (let x = 0; x < tamaño; x++) {
        let random = Math.floor(Math.random() * tamaño)
        contraseña += base.charAt(random)
    }

    return contraseña
}


const generar = () => {

    let tamaño = parseInt(inputTamaño.value)

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeros = "0123456789"
    const simbolos = ".?,;-_¡!¿*%&$/()[]{}|@><"

    if (checkbox1.checked) base += numeros

    if (checkbox2.checked) base += simbolos

    contraseñaGenerada.innerText = generarContraseña(base, tamaño)
}


window.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById('btnGenerar')

    boton.addEventListener("click", () => {
        generar()
    })
})