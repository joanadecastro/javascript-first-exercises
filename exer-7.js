//19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
//Sample array :
//array1 = [1,0,2,3,4];
//array2 = [3,5,6,7,8,13];
//Expected Output :
//[4, 5, 8, 10, 12, 13]

var sum= function(arrays1,arrays2)
{
 
    var count=0;
    result=[];
    var max= Math.max(arrays1.length,arrays2.length)
    for(var i=0; i<max;i++)
    {
        if (i < arrays1.length && i < arrays2.length){
            result.push(arrays1[i] + arrays2[i])
        }else if (i < arrays1.length){
            result.push(arrays1[i])
        }else{
            result.push(arrays2[i])
        }

    }
    return result
}
console.log(sum([1,0,2,3,4],[3,5,6,7,8,13]))         