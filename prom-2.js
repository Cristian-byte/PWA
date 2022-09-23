
function sumarUno(numero){

    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            //return numero + 1;
            //callback(null, numero + 1);
            resolve(numero + 1);
        }, 800);
    });

    return promesa;
}

//sumarUno(5).then(function(nuevoNumero){
// sumarUno(5).then( nuevoNumero => {
//     sumarUno(nuevoNumero).then(nuevoNumero2 =>{
//         console.log(nuevoNumero2);
//     });
// });

sumarUno(5).then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero);
})
.then(nuevoNumero => {
    console.log(nuevoNumero);
});