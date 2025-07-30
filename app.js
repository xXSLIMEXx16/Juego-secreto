let listaNumero = []
let numeroSecreto = generarnumeroAleatorio();
let intentos = 1;

///////////////////////////////////////////////////////////////////////////////////////////////
function asignarTextoelemento(elemento, texto){
let elementohtml = document.querySelector(elemento);
elementohtml.innerHTML = texto;

}
/////////////////////////////////////////////////////////////////////////////////////////////////
function verificarintento(){
let numerodeusuario = parseInt( document.getElementById('ingreso').value);
if (numerodeusuario === numeroSecreto){
    asignarTextoelemento('p',`Acertaste el numero secreto en ${intentos} ${intentos === 1 ? 'vez ' : 'veces'}` );
    document.getElementById('reiniciar').removeAttribute('disabled');
} else if(numerodeusuario < numeroSecreto){
    asignarTextoelemento('p','El numero ingresado es menor');
}else{
    asignarTextoelemento('p','El numero ingresado es mayor');
}
    intentos++;
    limpiarCaja();
}
////////////////////////////////////////////////////////////////////////////////////////////////
function generarnumeroAleatorio() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;

    if (listaNumero.includes(numeroSecreto)) {
        return numeroSecreto();
    }else {
        listaNumero.push(numeroSecreto);
        return numeroSecreto;
    }
    
}
////////////////////////////////////////////////////////////////////////////////////////////////
function limpiarCaja(){
    let valorCaja = document.querySelector('#ingreso').value = '';
 
}
////////////////////////////////////////////////////////////////////////////////////////////////
function condisionesIniciales(){
    asignarTextoelemento('h1','Juego de adivinar el numero');
    asignarTextoelemento('p','Seleccione un numero del 1 al 10');
    numeroSecreto = generarnumeroAleatorio();
    intentos = 1;

}
///////////////////////////////////////////////////////////////////////////////////////////////
function reiniciarJuego(){
    limpiarCaja();
    condisionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
///////////////////////////////////////////////////////////////////////////////////////////////
asignarTextoelemento('h1','Juego de adivinar el numero');
asignarTextoelemento('p','Seleccione un numero del 1 al 10');