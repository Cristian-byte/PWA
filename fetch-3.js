
//Peticion POST
//https://regres.in/api/users

let usuario = {
    nombre: 'Cristian',
    edad: '22'
};

fetch( 'https://regres.in/api', {
    method: 'POST', // PUT
    boby: JSON.stringify( usuario ), //data
    headers: {
        'Content-Type': 'application/json'
    }
})

.then( resp => resp.json() )
.then( console.log )
.catch( error => {
    console.log('Error en la peticion');
    console.log(error);
});