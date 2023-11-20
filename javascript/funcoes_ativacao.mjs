// Tangente hiperbólica retornando o valores entre -1 e 1
const tangenteHiperbolica = (x) => (1 - Math.exp(-2 * x)) / (1 + Math.exp(-2 * x));

// Sigmoidal retornando o valores entre 0 e 1
const sigmoidal = (x) => 1 / (1 + Math.exp(-x));


export {
    tangenteHiperbolica,
    sigmoidal
}