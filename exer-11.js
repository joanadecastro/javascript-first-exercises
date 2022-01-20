//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. Go to the editor

//Test Data :
//console.log(array_range(1, 4));
//[1, 2, 3, 4]
//console.log(array_range(-6, 4));
//[-6, -5, -4, -3]

var parametros= function(firstelement,numelement)
{  
    result=[];

    result.push(firstelement)
    console.log('o resultado é:' + result)
     
   
    for(var i=1;i<numelement;i++)
    {   
       result.push(i + firstelement)
       
    

    }


 return result  



}
console.log (parametros(5, 10))
