const students = [
    {
        name: 'Roger',
        grade: 7
    },
{
    name: 'Caio',
    grade: 6
},
{
    name: 'Emily',
    grade: 9

}
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados: ')
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ')
console.log(students);

/* dados nunca mudam. se você precisa mudar uma variavél,
você cria uma nova */