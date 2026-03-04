const rates = {
    CZK: 1,
    EUR: 24.37,
    USD: 21.21,
    PLN: 5.72
}

document.getElementById("convertBtn").addEventListener("click",  (e) => {
    e.preventDefault();

    const mena_from = document.getElementById("mena1").value;
    const mena_to = document.getElementById("mena2").value;
    const suma = parseFloat(document.getElementById("suma").value)


    // Převede částku na CZK, pak na cílovou měnu
    const czk_suma = suma * rates[mena_from];
    const converted = czk_suma * rates[mena_to];

    document.getElementById("vysledek").textContent = `${suma} ${mena_from} = ${converted.toFixed(1)} ${mena_to}`;
});                                                   // Temlate literal - řetězec obsahující proměnné a výrazy

