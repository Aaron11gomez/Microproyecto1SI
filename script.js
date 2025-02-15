function guardarNombre() {
    document.getElementById("nameButton").addEventListener("click", function(event) {
        const user = document.getElementById("nombre_jugador").value.trim();
        console.log("User input:", user);
        
        if (user) {
            localStorage.setItem("nombreUsuario", user);
            window.location.href = "game.html";
            console.log("changing...")
        } else {
            alert("Por favor ingresa tu nombre para jugar.");
        }
    });
    
}