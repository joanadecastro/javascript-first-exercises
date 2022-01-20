//EXERCICIO 6 1 array [1,2,3,4,5,6] - fazer a soma e a multiplicaçao dos elementos e devolver os dois valores em array

var valores= function(arrays)
{
    var resultsoma=0;
    var resultmultip=1;
    var result=[];
    for(var i=0; i<arrays.length; i++)
    {
        resultsoma=resultsoma+arrays[i];
        resultmultip=resultmultip*arrays[i]
    }
    result.push( resultsoma, resultmultip)  
    return result
}
var arr = valores([1,2,3,4,5,6])
console.log(valores([1,2,3,4,5,6]))         