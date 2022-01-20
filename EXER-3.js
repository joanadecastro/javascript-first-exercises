//INDICE
// PASSAR DE STRING PARA ARRAY------.SPLIT('')----Array.from

var arr = Array.from('The Quick Brown Fox');     // 2º metodo de transfomar string em array
console.log (arr)

var myString ='The Quick Brown Fox'; 
var splits = myString.split('');  // 2º metodo de transfomar string em array

console.log(splits)

//PERCORRER OS CARATERES DE UMA STRING SEM PASSAR PARA ARRAY

    //myString.charAt(i)   // 3º metodo - neste caso nao necessita de transformar em array...o "charat" 
    //percorre todos os caracteres de uma string


//PASSAR DE MAIUSCULAS PARA MINUSCULAS E VICE VERSA

    //(text.toUpperCase('The Quick Brown Fox'))-------CONVERTE A STRING EM LETRAS MAIUSCULAS
     //(text. toLowerCase('The Quick Brown Fox'))-----CONVERTE A STRING EM LETRAS MINUSCULAS

//usas o ;  em todo o lado q nao se usa {}

//var x = 4;

//x = 7;

//if ( condiçao) {........}    aqui nao se usa



//EXERCICIO 3- PASSAR A STRING 'The Quick Brown Fox' FOR 'tHE qUICK bROWN fOX'

var sentense = function(myString)
{   
    var result='';
    for(var i=0; i<myString.length; i++)
    {   
        if ( myString.charAt(i)==myString.charAt(i).toUpperCase())
        {
            result=result + myString.charAt(i).toLowerCase()
             
        }

        else
        {
            result=result+ myString.charAt(i).toUpperCase()  //IMPORTANTE:   myString.charAt(i).toUpperCase()
        }
      
     
    }

    return result
}
console.log(sentense('The Quick Brown Fox'))


//console.log('The Quick Brown Fox'.toUpperCase())----MAIUSCULAS


