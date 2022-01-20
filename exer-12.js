//Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

//Input: numbers= [10,20,10,40,50,60,70],50
//Output: 2, 3

var soma= function( array,numsoma)
{
    var result=0;
    var push=[];
   
    for(var i=0; i<array.length;i++)
    {
        
       result=array[i]
      

       
       //var push=[];
        for(var j=0;j<array.length;j++)
        { 

           
          // result=result+array[i]
                //console.log('resultado do segundo ciclo'+result)
                
                if(result+array[j]==numsoma)
                {
                //var push=[];
                   
                 push.push(i,j)
                
                 //return push
                }
             
                  
        }
        //return push 
    }
    return push 
}
console.log (soma([10,20,10,40,50,60,70],50))