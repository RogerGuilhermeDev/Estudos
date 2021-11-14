const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos 
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);
// retorna falso pq symnols são únicos!!!!!!!!!!!!!!

// prevenir conflito entre nomes de propriedades 
const nameSymbol = Symbol('name');
const nameSymbo2 = Symbol('name');

const user = {
    [nameSymbol]: 'Braddock',
    [nameSymbol]: 'Outro nome',
    lastName: 'Do Covil'
}

console.log(user)

// symbols criam propriedades que não são enumeráveis
for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log(`Valor da chave ${key}: ${user[key]}`)
    }
}