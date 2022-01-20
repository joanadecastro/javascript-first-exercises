

var soma = function (largura, altura) {
    var batatas = ( largura * altura )
    return batatas
}

var result= soma (6 , 4)
console.log ('a area do retangulo é: ' + result  +' a joana é lindaaaaa')



var imprime = function(limite){

    for ( var i=1 ; i<=limite ; i++){
        console.log(i)
    }

}
 imprime(5)
 console.log('---------------------------------------------------------------------')


var imp = function(limite){

    var armazenar=0
    for ( var i=0 ; i<=limite ; i++){
        armazenar = armazenar+i
    }
    return armazenar

}

 console.log(imp(3))

 console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

 var par= function(limite){

    var armazenar=0
    for( var i=0 ; i< limite ; i+=2) {
        console.log('o valor de i é : ' + i)
        console.log('o valor de armazenar antes de actualizar é : ' + armazenar)
        armazenar=i
        console.log('o valor de armazenar depois de actualizar é : ' + armazenar)
    }
    return ( armazenar)
}
console.log(par(10))
console.log('____________________________________________________________')

var numberpar= function (limite){

    var arm =0
    for( var i= 0 ; i < limite ; i++) {
        console.log ( 'o valor de i é:' + i)
        if ( i% 2==0){ 
            arm = i
        }
    }

    return arm 
    //quando quero que a funcao devolva um resultado ou algo tenho sempre de retornar e dp fazer console.log....para comentar ( //)...
    //verificar se o nº X é par ( X % 2 == 0 ( o resto da divisao por dois é zero? entao é par)
    //verificar se o nº X é impar ( X % 2 != 0 ( o resto da divisao por dois NAO é zero? entao é impar)
}

console.log (numberpar(10)) 



