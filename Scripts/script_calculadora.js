// Función para calcular la tarifa de los servicios públicos
function calcularTarifa(event) {
    event.preventDefault(); // Prevenir recarga de la página

    // Obtenemos los valores ingresados en el formulario
    var agua = parseFloat(document.getElementById("agua").value);
    var gas = parseFloat(document.getElementById("gas").value);
    var kw = parseFloat(document.getElementById("kw").value);

    // Verificamos si los valores ingresados son válidos
    if (isNaN(agua) || isNaN(gas) || isNaN(kw)) {
        alert("Por favor ingrese todos los valores correctamente.");
        return;
    }

    // Tarifas de ejemplo
    var tarifaAgua = 5000; // Tarifa por metro cúbico de agua
    var tarifaGas = 6000;  // Tarifa por metro cúbico de gas
    var tarifaKw = 1000;   // Tarifa por kilovatio consumido

    // Calculamos el total de la tarifa
    var total = (agua * tarifaAgua) + (gas * tarifaGas) + (kw * tarifaKw);

    // Mostramos el resultado en la página
    document.getElementById("resultado").textContent = `El total de la tarifa es: $${total.toFixed(2)}`;
}

// Asociar la función al evento de envío del formulario
document.getElementById("calculadoraForm").addEventListener("submit", calcularTarifa);
