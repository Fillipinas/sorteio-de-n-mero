function sorteiaNumero(inicio, fim) {
    return Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
}

let inicio = 1; 
let fim = 100;
let numeroSorteado = sorteiaNumero(inicio, fim);
console.log("Número sorteado:", numeroSorteado);