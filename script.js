document.getElementById('calcular').addEventListener('click', function () {
    const questao1 = parseInt(document.getElementById('questao1').value);
    const questao2 = parseInt(document.getElementById('questao2').value);

    const soma = questao1 + questao2;
    const resultado = document.getElementById('resultado-quiz');

    if (soma <= 4) {
        resultado.innerHTML = "Você pode estar passando por um momento difícil. Procure apoio de um amigo ou profissional.";
        resultado.style.color = 'red';
    } else if (soma <= 6) {
        resultado.innerHTML = "Você está enfrentando desafios, mas está no caminho certo. Continue se cuidando!";
        resultado.style.color = 'orange';
    } else {
        resultado.innerHTML = "Parabéns! Você parece estar emocionalmente equilibrado. Continue assim!";
        resultado.style.color = 'green';
    }
});
