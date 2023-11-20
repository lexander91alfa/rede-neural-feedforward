// Somatorio dos valores de input + weight
const Somatorio = (arr=[]) => arr.reduce((a, b) => a + b, 0);

// gradient descent function atualiza os pesos de acordo com o erro
const gradientDescent = (n=0) => n*(1-n);

// função de feedforward
const feedforward = (input=[], target=0, epochs=0) => {
    // Se o valor de entrada for menor ou igual a 0, o valor de entrada será 0.1
    if (target <= 0) target = 0.1;
    // Se o valor de entrada for maior que 1, o valor de entrada será 1
    else if (target > 1) target = 1;

    // Inicializa os pesos com valores aleatórios
    let weights = []
    for (let i = 0; i < input.length; i++) {
        weights.push(Math.random());
    }

    // loop de quantas vezes a rede neural vai ser treinada
    for (let i = 0; i < epochs; i++) {
        // multiplicação dos pesos pelas entradas
        let mult = [];
        for (let j = 0; j < input.length; j++) {
            if (input[j] <= 0) input[j] = 0.1;

            mult.push(input[j] * weights[j]);
        
        }

        // somatorio dos valores de input * weight
        let sum = Somatorio(mult);

        // função de ativação tangente hiperbólica que retorna um valor entre -1 e 1
        let output = parseFloat(Math.tanh(sum)).toFixed(4);

        // erro = valor esperado - valor obtido
        let error = parseFloat(Math.abs(target - output)).toFixed(4);

        // Atualiza os pesos de acordo com o erro
        for (let j = 0; j < weights.length; j++) {
            weights[j] += input[j] * gradientDescent(error);
        }
        // epoch formatado com 7 digitos a esquerda
        let epoch = i.toString().padStart(7, '0');

        // console
        console.log(`Epoch: ${epoch} | Output: ${output} | Error: ${error} | Weights: ${weights}`);
    }
}

export default feedforward;