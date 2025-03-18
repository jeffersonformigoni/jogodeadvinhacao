// Variável para definir dinamicamente o intervalo dos números
let intervaloMaximo = 100; // Altere esse valor para mudar o intervalo

// Verificação do intervalo máximo
if (intervaloMaximo < 1) {
    intervaloMaximo = 100;
}

// Pegando elementos do DOM
const campoChute = document.getElementById("numeroChute");
const botaoChute = document.getElementById("botaoChute");
const feedback = document.getElementById("feedback");
const dicas = document.getElementById("dicas");
const tentativasRestantes = document.getElementById("tentativas");

// Gerar número aleatório dentro do intervalo definido
function sorteiaNumero() {
    return Math.floor(Math.random() * intervaloMaximo) + 1;
}

let numeroPensado = sorteiaNumero();
console.log("Número sorteado:", numeroPensado); // Debug no console

let tentativas = 10;

// Função para verificar o palpite do jogador
function verificaChute() {
    let chute = Number(campoChute.value);

    if (isNaN(chute) || chute < 1 || chute > intervaloMaximo) {
        feedback.innerHTML = `⛔ Digite um número válido entre 1 e ${intervaloMaximo}!`;
        return;
    }

    tentativas--;

    if (chute === numeroPensado) {
        feedback.innerHTML = `🎉 Parabéns! Você acertou o número ${numeroPensado} em ${10 - tentativas} tentativas!`;
        dicas.innerHTML = `<button onclick="reiniciarJogo()">🔄 Jogar novamente</button>`;
        botaoChute.disabled = true;
        campoChute.disabled = true;
    } else {
        feedback.innerHTML = chute < numeroPensado ? "📉 Tente um número maior!" : "📈 Tente um número menor!";
        tentativasRestantes.textContent = tentativas;

        if (tentativas === 0) {
            feedback.innerHTML = `😢 Você perdeu! O número era ${numeroPensado}.`;
            dicas.innerHTML = `<button onclick="reiniciarJogo()">🔄 Tentar novamente</button>`;
            botaoChute.disabled = true;
            campoChute.disabled = true;
        }
    }

    campoChute.value = "";
    campoChute.focus();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroPensado = sorteiaNumero();
    console.log("Novo número sorteado:", numeroPensado);
    tentativas = 10;
    tentativasRestantes.textContent = tentativas;
    feedback.innerHTML = "";
    dicas.innerHTML = "";
    campoChute.value = "";
    campoChute.disabled = false;
    botaoChute.disabled = false;
    campoChute.focus();
}

// Adicionar evento para ativar botão ao pressionar Enter
campoChute.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        verificaChute();
    }
});