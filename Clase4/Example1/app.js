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

//Llamamos la funcion de arriba
multiplicar(2, 10).then(
    //okCallback
    function(resultado){

        //Multiplico de nuevo
        multiplicar(resultado, 2).then(
            //okCallback
            function(resultado2){
                console.log('Resultado de multiplicar es: ' + resultado + '/' + resultado2)
            },
            //errorCallback
            function(error){
                console.log('Ocurrió un error: ' + error)
            }
        )
    },
    //errorCallback
    function(error){
        console.log('Ocurrió un error: ' + error)
    }
);