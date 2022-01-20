//8. Write a JavaScript program to compute the union of two arrays. Go to the editor
//Sample Data :
///console.log(union([1, 2, 3], [100, 2, 1, 10]));
//[1, 2, 3, 10, 100]

var union = function(arrays1,arrays2)
{

    var result=[];

    for(var i=0;i<arrays1.length;i++)
    {
        result.push(arrays1[i])

    }

    for(var i=0;i<arrays2.length;i++)
    {
        
        var found=false
        for(var j=0;j<result[j];j++)
        {
            if(arrays2[i]==result[j])
            {
                found=true
            }   
        }
        if (found==false){
            result.push(arrays2[i])

        }

    }
}