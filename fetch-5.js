
fetch( 'https://reqres.in/api/users/10' )
    .then(resp => {

        console.log(resp);

        if( resp.ok ) {
            return resp.json();
        } else {
            //console.log('No existe el usuario 1000');
            throw new Error('No existe el usuario 1000');
        }
        //resp.jason().then(console.log);
    })
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    });