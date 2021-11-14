const user = {
    name: 'Rog',
    lastName: 'Braddock'
}

// recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user))
// keys = name e lastName
//-----------------------------------------

//recupera os valores das chaves dos objetos
console.log('Valores das propriedades do objeto user: ', Object.values(user))

//retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('Lista de propriedades e valores: ', Object.entries(user))

// mergear propriedades de objetos
Object.assign(user, {fullName: 'Rog Braddock'});

console.log('Adiciona a propriedade fullName no objeto user: ', user);
console.log('Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));
// mergear = criar/adiciona || cria coisas novas a partir de coisas já existentes

// previne todas as alterações de um objeto (congela ele)
const newObj = { foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'Changes';

console.log(newObj)

// permite apenas alterações de propriedades já existentes em um objeto
const person = {name: 'Braddock'}
Object.seal(person)

person.name = 'Rog Braddock';
delete person.name;
person.age = 26

console.log('Variavel person após as alteraçõe ', person) //não cria e nem add nada
