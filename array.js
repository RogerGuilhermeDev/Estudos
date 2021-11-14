const user = ['Braddock', 'Nami', 'Sanji']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('N')
}

const persons = [
    {name: 'Braddock',
    age: 26,
    gender: gender.MAN 
},
{name: "Nami",
age: 20,
gender: gender.WOMAN
},
{
    name: 'Sanji',
    age: 20,
    gender: gender.MAN
}
]


// retornar a quantidade de itens de um array: 
console.log('Itens: ', persons.length)

// verifica se é array:
console.log('A variável persons é um array? ', Array.isArray(persons))

//iterar os itens de um array:
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
})

// filtrar um array:
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('Lista apenas com homens: ', mens)

//retornar um novo
const personWithCourse = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0);

console.log('Pessoas com adição de course ', personWithCourse);

//transformar array em outro tipo

const totalAge = persons.reduce ((age, person) => {
    age += person.age;
    return age
}, 0);

console.log('Soma da idade das pessoas: ', totalAge)

