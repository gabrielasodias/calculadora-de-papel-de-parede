// mostrando ou escondendo o campo da repetição
document.getElementById("repete").addEventListener("change", function () {
    const campo = document.getElementById("campo-repeticao");
    campo.style.display = this.value === "sim" ? "block" : "none";
});

// lógica de cálculo
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const larguraParede = parseFloat(document.getElementById("largura-parede").value);
    const alturaParede = parseFloat(document.getElementById("altura-parede").value);
    const larguraRolo = parseFloat(document.getElementById("largura-rolo").value);
    const alturaRolo = parseFloat(document.getElementById("altura-rolo").value);
    const temRepeticao = document.getElementById("repete").value === "sim";
    const repeticao = temRepeticao ? parseFloat(document.getElementById("repeticao").value) : 0;

    if (
        isNaN(larguraParede) || isNaN(alturaParede) ||
        isNaN(larguraRolo) || isNaN(alturaRolo) ||
        (temRepeticao && isNaN(repeticao))
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let alturaFaixa;
    let cortesPossiveis;

    if (temRepeticao) {
        alturaFaixa = alturaParede + repeticao;
        cortesPossiveis = Math.floor(alturaRolo / alturaFaixa);
    } else {
        alturaFaixa = alturaParede + 0.10; // 10 cm de margem
        cortesPossiveis = Math.floor(alturaRolo / alturaFaixa);
    }

    const faixasNecessarias = Math.ceil(larguraParede / larguraRolo);
    const rolosNecessarios = Math.ceil(faixasNecessarias / cortesPossiveis);

    document.getElementById("quantidade").textContent = rolosNecessarios;
    document.getElementById("resultado").style.display = "block";
});
