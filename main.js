// Somatorio dos valores de input + weight
const Somatorio = (arr=[]) => arr.reduce((a, b) => a + b, 0);

// gradient descent function atualiza os pesos de acordo com o erro
const gradientDescent = (n=0) => n*(1-n);

// função de feedforward
const feedforward = (input=[], target=0, epochs=0) => {
    // target
    if (target <= 0) target = 0.1;
    else if (target > 1) target = 1;

    // pesos
    weights = []
    for (let i = 0; i < input.length; i++) {
        weights.push(Math.random());
    }

    // epochs
    for (let i = 0; i < epochs; i++) {
        // output
        output = Somatorio(input) + Somatorio(weights);

        // erro
        error = target - output;

        // atualiza os pesos
        for (let j = 0; j < weights.length; j++) {
            weights[j] += error * gradientDescent(output);
        }
    }
}