
function sumarUno(numero){

    var promesa = new Promise(function(resolve, reject){

        console.log(numero);

        if (numero >= 7) {
            reject('El numero es muy alto');
        }

        setTimeout(function(){
            //return numero + 1;
            //callback(null, numero + 1);
            resolve(numero + 1);
        }, 800);
    });

    return promesa;
}

/**sumarUno(5).then(function(nuevoNumero){
 sumarUno(5).then( nuevoNumero => {
     sumarUno(nuevoNumero).then(nuevoNumero2 =>{
         console.log(nuevoNumero2);
     });
});*/

/**sumarUno(5)
    .then(nuevoValor => {
        console.log(nuevoValor);
    })
    .then( nuevoNumero => {
        //console.log(nuevoNumero);
        return sumarUno(nuevoNumero);
    })
    //.then(nuevoValor => sumarUno(nuevoValor))
    .then( sumarUno)
    .then(nuevoNumero => {
        console.log(nuevoNumero);
        return sumarUno(nuevoNumero);
    })
    .then(sumarUno)
    .then(nuevoNumero => {
        console.log(nuevoNumero);
    });
    .catch(error => {
        console.log('Error en la promesa');
        console.log(error);
    });*/

    sumarUno(0)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(sumarUno)
        .then(nuevoNumero => {
            console.log(nuevoNumero);
        })
        .catch(error => {
            console.log('Error en la promesa');
            console.log(error);
        })