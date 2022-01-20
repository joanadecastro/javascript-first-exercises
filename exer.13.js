//Write a JavaScript program to find the most frequent item of an array. Go to the editor
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Andre enviou a mensagem: Hoje às 21:32
//Sample Output : a ( 5 times )

var repeat= function( array)
{
    var result='';
    var max=0;
    for( var i=0; i<array.length; i++)
    {
       
        console.log('no 1º ciclo for temos:'+ result)

       ocorrencia=0;
       posiçao=[];
     
        for(var j=0;j<array.length; j++)
        {
           if(array[i]==array[j])
           {
            ocorrencia=ocorrencia+1;
            console.log('ocorrencia'+ ocorrencia)
            }

           
           
        }
        if(max<ocorrencia)
        {

            max=ocorrencia;
            result=array[i];
           console.log('ocorre:'+ ocorrencia)
        }
 
    }


  
    return  result + '(' + max + ' ) times'

}
console.log (repeat([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))






















