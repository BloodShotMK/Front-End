let ingredientes = [];

function agregarIngrediente() {
    const input = document.getElementById('ingrediente');
    if (input.value.trim() !== '') {
        ingredientes.push(input.value.trim());
        document.getElementById('ingredientes-lista').innerText = `Ingredientes: ${ingredientes.join(', ')}`;
        input.value = '';
    }
}

function hacerPizza(ingredientes) {
    return new Promise((resolve, reject) => {
        if (ingredientes.includes('piña')) {
            setTimeout(() => reject('UGH, no aceptamos piña en la pizza'), 500);
        } else {
            setTimeout(() => resolve(`Pizza con ${ingredientes.join(', ')}`), 1000);
        }
    });
}

function obtenerImagenPizza(ingredientes) {
    if (ingredientes.includes('pepperoni')) return 'pepperoni.jpg';
    if (ingredientes.includes('jamón')) return 'jamon.jpg';
    if (ingredientes.includes('vegetales')) return 'vegetales.jpg';
    return 'default_pizza.jpg';
}

function ordenarPizza() {
    hacerPizza(ingredientes)
        .then(mensaje => {
            const img = document.createElement('img');
            img.src = obtenerImagenPizza(ingredientes);
            img.alt = mensaje;
            document.getElementById('pizza-container').appendChild(img);
            ingredientes = [];
            document.getElementById('ingredientes-lista').innerText = '';
        })
        .catch(err => {
            alert(`Error: ${err}`);
            // Eliminar 'piña' de la lista de ingredientes
            ingredientes = ingredientes.filter(ingrediente => ingrediente !== 'piña');
            document.getElementById('ingredientes-lista').innerText = `Ingredientes: ${ingredientes.join(', ')}`;
        });
}
