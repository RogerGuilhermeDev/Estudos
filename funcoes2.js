this.name - 'Nome no contexto de criação'; // escopo glogal

const getNameArrowFn = () => this.name; // método arrow function

function getName() {          //método normal de pessoa de bem
    return this.name
}

const user = {
    name: 'Nome do objeto em execução',
    getName
}

console.log(user.getName())