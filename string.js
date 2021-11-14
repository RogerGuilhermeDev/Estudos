// retorna o tamanho de uma string
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText)

// busca por um valor e substitui por outro 
const replacedText = 'texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText)

// retorna a "falta" de um valor || ultima letra de string
const lastChar = 'texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar)

const allWithoutLastChar = "texto".slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar)

// retorna N caracteres a partir de uma posição 
const twoCharsBeforeFirstPos = 'texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos)