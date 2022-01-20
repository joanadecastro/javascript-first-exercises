// Write a JavaScript program which prints the elements of the following array. Go to the editor
//Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
//Sample Output :
//"row 0"
//" 1"
//" 2"
//" 1"
//" 24"
//"row 1"

var rondas = function (row)
{
    var result='';
   
    for( var i=0; i<row.length; i++)
    {   
        result= result+'row'+i
       
        var array= row[i];
      
        for( var j=0; j<array.length; j++)
        {
           result=result+ array[j]
          
        }
      
    }
return result
}
console.log(rondas([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]))