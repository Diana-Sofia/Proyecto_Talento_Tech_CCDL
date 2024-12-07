// Función para calcular la tarifa de los servicios públicos
function calcularTarifa() {
    // Obtenemos los valores ingresados en el formulario
    var agua = parseFloat(document.getElementById("agua").value);
    var gas = parseFloat(document.getElementById("gas").value);
    var kw = parseFloat(document.getElementById("kw").value);

    // Verificamos si los valores ingresados son válidos
    if (isNaN(agua) || isNaN(gas) || isNaN(kw)) {
        alert("Por favor ingrese todos los valores correctamente.");
        return;
    }

    // Tarifas de ejemplo (puedes ajustar estos valores según las tarifas reales)
    var tarifaAgua = 5000; // Tarifa por metro cúbico de agua
    var tarifaGas = 6000;  // Tarifa por metro cúbico de gas
    var tarifaKw = 1000;   // Tarifa por kilovatio consumido

    // Calculamos el total de la tarifa
    var total = (agua * tarifaAgua) + (gas * tarifaGas) + (kw * tarifaKw);

    // Mostramos el resultado en la página
    document.getElementById("tarifa").textContent = total.toFixed(2); // Mostramos el valor con dos decimales
}