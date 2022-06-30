


let nombreUsuario = prompt ('Nombre' + ' ' + 'y' + ' ' + 'Apellido' );
let NombreIncorrecto =0;
console.log(NombreIncorrecto);

if (nombreUsuario == "") {
    alert('Usuario incorrecto, por favor vuelva a ingresar');
    nombreUsuario = prompt ('Nombre' + ' ' + 'y' + ' ' + 'Apellido' );
    NombreIncorrecto = 1;
    console.log(NombreIncorrecto);
} 
else {
    alert('Bienvenid@' + ' ' + nombreUsuario);
    NombreIncorrecto = 2;
    console.log(NombreIncorrecto);
} 

while (NombreIncorrecto<=1){
    if (nombreUsuario == "") {
        alert('Usuario incorrecto, por favor vuelva a ingresar');
        nombreUsuario = prompt ('Nombre' + ' ' + 'y' + ' ' + 'Apellido' );
        NombreIncorrecto = 1;
        console.log(NombreIncorrecto);
    
    } 
    else {
       
        NombreIncorrecto = 2;
        console.log(NombreIncorrecto);
    } 
}

console.log(NombreIncorrecto);


let email = prompt ('E-mail' );



console.log('Usuario logeado' + ' ' + nombreUsuario + ' '  + email);

