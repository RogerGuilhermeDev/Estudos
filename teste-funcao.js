// definidas no escopo global

let num1 = 20
let num2 = 3
let nome = "braddock"

// função definida no escopo global

function multiplica() {
    return num1*num2
}

console.log(multiplica())

// um exemplo de função aninhada 

function getScore() {
    let num3 = 2
    let num4 = 4

    function add(){
        return nome + ' scored ' + (num4 + num4)
    }

    return add();
}

console.log(getScore())


