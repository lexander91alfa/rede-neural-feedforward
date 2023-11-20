import feedforward from "../javascript/funcoes.mjs";


// executando a função feedforward

// valores de entrada
let inputs = [0, 0];

// Valores esperados
let target = 0.1;

// quantidade de vezes que passará pelo loop e atualizará os pesos
let epochs = 800;

feedforward(inputs, target, epochs);