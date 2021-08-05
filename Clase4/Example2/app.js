function multiplicar(num1, num2){
    const promise = new Promise(function(okCallback, errorCallback){
        setTimeout(function(){
            if(num1 > 0 && num2 > 0){
                const result = num1 * num2;
                okCallback(result);
            } else {
                errorCallback('Uno de los valores es menor a igual 0.');
            }
        }, 2000);
    });
    return promise;
}

async function main(){
    try {
        //Llamamos la funcion de arriba
        const resultMulti = await multiplicar(2, 50);
        const resultMultiFinal = await multiplicar(resultMulti, 10);

        console.log('Resultado de multiplicar es: ' + resultMultiFinal);
    } catch (error) {
        console.log('Ocurrió un error: ' + error);
    }
}


main();
