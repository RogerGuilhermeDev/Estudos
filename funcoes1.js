function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // mais de uma expressão
    return 'Code here';
}

// funções também são objetos 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// receber parâmetros 
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// receber e retornar funções
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);



