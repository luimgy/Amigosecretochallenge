🎁 Amigo Secreto Challenge


📌 Descripción
Este proyecto es una aplicación web para realizar sorteos de "Amigo Secreto" de manera sencilla y automática.
Permite a los usuarios agregar nombres, almacenarlos en pantalla y seleccionar aleatoriamente un amigo secreto.
Después de realizar el sorteo, la lista se limpia automáticamente tras 10 segundos, permitiendo reiniciar el proceso sin necesidad de un botón de reinicio.
---

 📂 Estructura del proyecto 
📁 amigo-secreto
│-- 📄 index.html        # Estructura del juego
│-- 📄 style.css         # Estilos y diseño visual
│-- 📄 app.js            # Lógica y funciones en JavaScript
│-- 📄 README.md         # Información sobre el proyecto
│-- 📁 assets/           # Imágenes y otros recursospariencia.
3. `app.js` - Implementa la funcionalidad del sorteo.

---

📄 1. Estructura en HTML (`index.html`)

### **Descripción**
El HTML establece la base del sitio, organizando los elementos de entrada, botones y resultados.

### **Código**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amigo Secreto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Juego de Amigo Secreto</h1>
    <input type="text" id="nombre" placeholder="Ingresa un nombre">
    <button onclick="agregarNombre()">Agregar</button>
    
    <h2>Lista de Participantes</h2>
    <ul id="listaParticipantes"></ul>
    
    <button onclick="sortearAmigoSecreto()">Sortear</button>
    
    <h2>Resultados</h2>
    <div id="resultados"></div>
    
    <script src="app.js"></script>
</body>
</html>
```

### **Explicación**
1. Se crea una estructura básica con `<html>`, `<head>` y `<body>`.
2. Se incluye un campo `<input>` para que los usuarios ingresen nombres.
3. Un `<button>` para agregar nombres a la lista.
4. Se muestra una lista de participantes en `<ul id="listaParticipantes">`.
5. Un botón activa la función de sorteo.
6. Se muestra el resultado del sorteo en `<div id="resultados">`.
7. Se vincula el archivo `app.js` para la lógica del programa.

---

 🎨 2. Estilos en CSS (`style.css`)

### **Descripción**
El CSS mejora la presentación del contenido, haciéndolo más atractivo y organizado.

### **Código**
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

input, button {
    padding: 10px;
    margin: 10px;
    font-size: 16px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #f3f3f3;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}
```

### **Explicación**
1. Se define una fuente y alineación central para el cuerpo (`body`).
2. Se da estilo a los botones y campos de entrada (`input, button`).
3. Se eliminan los estilos de listas (`ul`) y se mejora la apariencia de cada elemento (`li`).
4. Se agregan estilos de hover para mejorar la interactividad.

---

⚙️ 3. Funcionalidad en JavaScript (`app.js`)

### **Descripción**
El JavaScript gestiona la lógica para agregar nombres, mostrarlos en pantalla y realizar el sorteo de manera aleatoria.

### **Código**
```js
let participantes = [];

function agregarNombre() {
    let inputNombre = document.getElementById("nombre");
    let nombre = inputNombre.value.trim();

    if (nombre !== "") {
        participantes.push(nombre);
        mostrarLista();
        inputNombre.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";

    participantes.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(item);
    });
}

function sortearAmigoSecreto() {
    if (participantes.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }

    let sorteados = [...participantes];
    sorteados = sorteados.sort(() => Math.random() - 0.5);

    let resultados = [];
    for (let i = 0; i < participantes.length; i++) {
        let amigoIndex = (i + 1) % participantes.length;
        resultados.push(`${participantes[i]} → ${sorteados[amigoIndex]}`);
    }

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    let contenedorResultados = document.getElementById("resultados");
    contenedorResultados.innerHTML = "";

    resultados.forEach(resultado => {
        let p = document.createElement("p");
        p.textContent = resultado;
        contenedorResultados.appendChild(p);
    });
}
```

### **Explicación**
1. `agregarNombre()`: Agrega nombres a la lista.
2. `mostrarLista()`: Muestra los nombres en pantalla.
3. `sortearAmigoSecreto()`: Realiza un sorteo aleatorio.
4. `mostrarResultados()`: Muestra los emparejamientos en la pantalla.

---


🎯 Funcionalidades
- Permite agregar nombres  de los participante en el campo de entrada.
- Presionar el botón "Agregar".
- Muestra la lista de amigos ingresados.
- Realiza el sorteo aleatorio de manera justa.
- Muestra los resultados y los borra después de 10 segundos.

---

🛠️ Tecnologías Utilizadas
- **HTML**: Para la estructura del sitio.
- **CSS**: Para el diseño y apariencia.
- **JavaScript**: Para la lógica del sorteo y manipulación de la lista de participantes.

---

🎮 Cómo jugar/ 🚀 Cómo usar
1. Ingresa los nombres de los participantes en el campo correspondiente.
2. Presiona el botón para añadirlos a la lista.
3. Una vez que estén todos los participantes, presiona el botón de "Sortear".
4. Los resultados se mostrarán por 10 segundos antes de ser eliminados.

---

 📌 Conclusión
Este proyecto es una excelente práctica de HTML, CSS y JavaScript para aprender manipulación del DOM y lógica de programación. ¡Esperamos que lo disfrutes! 🎉


