// Función para calcular el IVA y el precio total
function calcularIVA(precioBase, tasaIVA) {
    // Verificar que los valores de entrada sean válidos
    if (isNaN(precioBase) || isNaN(tasaIVA)) {
        throw new Error("Los valores de entrada deben ser números.");
    }

    // Calcular el IVA
    let iva = (precioBase * tasaIVA) / 100;

    // Calcular el precio total
    let precioTotal = precioBase + iva;

    // Retornar un objeto con los resultados
    return {
        precioBase: precioBase,
        tasaIVA: tasaIVA,
        iva: iva,
        precioTotal: precioTotal
    };
}
// Algoritmo con un condicional
function validarValores(precioBase, tasaIVA) {
    if (precioBase <= 0 || tasaIVA < 0) {
        alert("Por favor, ingrese valores válidos. El precio debe ser mayor que 0 y la tasa de IVA no puede ser negativa.");
        return false;
    }
    return true;
}
function ejecutarSimulador() {
    let continuar = true;

    while (continuar) {
        // Solicitar al usuario el valor del producto y la tasa de IVA
        let precioBase = parseFloat(prompt("Ingresa el valor del producto:"));
        let tasaIVA = parseFloat(prompt("Ingresa la tasa de IVA (%):"));

        if (validarValores(precioBase, tasaIVA)) {
            try {
                // Calcular los resultados utilizando la función calcularIVA
                let resultado = calcularIVA(precioBase, tasaIVA);

                // Mostrar los resultados en una alerta
                alert("Precio Base: $" + resultado.precioBase.toFixed(2) +
                    "\nTasa IVA: " + resultado.tasaIVA + "%" +
                    "\nIVA: $" + resultado.iva.toFixed(2) +
                    "\nPrecio Total: $" + resultado.precioTotal.toFixed(2));
            } catch (error) {
                alert(error.message);
            }
        }

        // Preguntar al usuario si desea continuar
        continuar = confirm("¿Desea calcular el precio de otro producto?");
    }
}
// Ejecutar el simulador
ejecutarSimulador();