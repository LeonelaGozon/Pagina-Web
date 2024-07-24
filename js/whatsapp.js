function enviarPorWhatsapp() {
    
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const url = "https://wa.me/2224524332?text="
    + "Nombre: " + nombre + "%0a"
    + "Asunto: " + asunto + "%0a"
    + "Mensaje: " + mensaje;
    window.open(url, '_blank').focus();
}
