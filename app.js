// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1: Crear un array vacío para almacenar los nombres
let amigos = [];

// Paso 2: Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Captura el input
    const nombre = input.value.trim(); // Obtiene el valor y elimina espacios extras

    if (nombre !== "") {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el input después de agregar
        actualizarListaAmigos(); // Llama a la función que actualizará la lista en pantalla
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Paso 3: Función para actualizar la lista de amigos en pantalla
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtener el elemento <ul>
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Iterar sobre el array amigos y agregar cada nombre como un <li>
    for (let amigo of amigos) {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista <ul>
    }
}

// Paso 4: Función para sortear un amigo al azar y reiniciar la lista después
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio basado en la cantidad de amigos en el array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el <ul id="resultado">
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;

    // Esperar 10 segundos y luego limpiar la lista automáticamente
    setTimeout(() => {
        amigos = []; // Vaciar el array de amigos
        document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en pantalla
        document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    }, 10000); // 10000 milisegundos = 3 segundos
}
