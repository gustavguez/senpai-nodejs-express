function multiplicar(num1, num2){
    return new Promise(function(okCallback, errorCallback){
        setTimeout(function(){
            if(num1 > 0 && num2 > 0){
                const result = num1 * num2;
                okCallback(result);
            } else {
                errorCallback('Uno de los valores es menor a igual 0.');
            }
        }, 2000);
    });
}

//Con AWAIT
async function main(){
    const resultado = await multiplicar(1, 2);
    const resultado2 = await multiplicar(resultado, 6);
    console.log(resultado2);
}

main();

//Con THEN
// multiplicar(2, 3)
//     .then(function(respuesta){
//         multiplicar(respuesta, 2)
//             .then(function(respuesta){
//                 //OK
//                 console.log(respuesta);
//             }, function(error){
//                 //Error
//                 console.log(error);
//             })
//             .catch(function(exeption){
//                 console.log(exeption.message);
//             });
//     }, function(error){
//         //Error
//         console.log(error);
//     })
//     .catch(function(exeption){
//         console.log(exeption.message);
//     });

