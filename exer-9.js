//Write a JavaScript function to remove a specific element from an array. Go to the editor

//Test data :
//console.log(remove_array_element([2, 5, 9, 6], 5));
//[2, 9, 6]

var remove=function(array, remo)
{

    var result =[];
  
    for(var i=0;i<array.length; i++)
    {
        if ( array[i]!=remo)
        {
            result.push(array[i])  
        }

        
    }
    return result

}

console.log(remove([2, 5, 9, 6], 5))   