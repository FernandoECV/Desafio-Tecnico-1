// Função que calcula os números divisíveis por 3 ou 5
function soma(numero) {
    let contador = 0;

    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            contador+=i;
        }    
    }
    return contador;
}

// Função para atualizar o resultado no DOM
function mostrarResultado() {
    // capturo o elemento numeroInput e guardo na variável em questão
    const numeroInput = document.getElementById('numeroInput');
    // capturo o elemento resultadoSpan e guardo na variável em questão
    const resultadoSpan = document.getElementById('resultadoSpan');

    // Obtém o valor digitado pelo usuário
    const numero = parseInt(numeroInput.value);

    // Calcula o somatório dos números divisiveis por 3 ou 5 
    const resultado = soma(numero);

    // Atualiza o elemento no DOM com o resultado
    resultadoSpan.textContent = resultado;
}

// Adiciona um ouvinte de evento para o input
document.getElementById('numeroInput').addEventListener('input', mostrarResultado);










