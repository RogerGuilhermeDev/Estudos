var test = "exemple";

(() => {
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        var test = 'exemple';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`valor após a execução do if "${test}"`)
})();