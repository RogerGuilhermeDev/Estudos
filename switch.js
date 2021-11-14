const fruit = 'pera';

switch (fruit){
    case 'banana':
    console.log('2 reais o kilo');
    break;
    case 'mamao':
    case 'pera':
    console.log('2 reais o kilo');
    break;
    default:
        console.log('Produto não existe no estoque. ')
        break;
}