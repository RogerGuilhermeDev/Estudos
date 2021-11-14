let user = {
    name: 'Braddock'
};

// alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

// criando uma propriedade
user.lastName = 'Rog';

// deletando uma propridade
 delete user.name;

console.log(user.name)