//escrever uma funçao
//em q o parametro de entrada é um array de numeros
//e tem de devolver
//o numero mais elevado desse array
//ex:  ([20, 2, 34, 12, 3, 79, 58])    tem de devolver  79

var higher= function (array)
{
    var result=0;
    for(var i=0; i< array.length;i++)
    {    
        if(result<array[i])
        {

            result=array[i]
        }
       


        
       
    }
 return result  
   
}
console.log(higher([20, 2, 34, 12, 3, 79, 58]))
//higher([20, 2, 34, 12, 3, 79, 58])  ------imprimir o CONSOLE 1 de cima..console 1 assim