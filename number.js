const MeuNumero = 777.77777;

// transforma número para string
const NumeroParaString = MeuNumero.toString();
console.log('\nNúmero transforma em string: ', MeuNumero, typeof NumeroParaString);

// retorna número com casas decimais
const fixedTwoDecimals = MeuNumero.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

// transforma o número em inteiro

const NumeroInteiro = parseInt(MeuNumero)
console.log(NumeroInteiro)