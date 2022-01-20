var repeat = function(arrays)  // var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
{        

    var max =0; // guarda o numero maximo de occorrencias
    var result=""; // armazenar o item do array que tem mais ocorrencias
    for(var i=0;i<arrays.length;i++)                        //um ciclo for repete tudo o que esta dentro dele...se tem um ciclo for dentro de outro entao o ciclo for que esta dentro é repetido pelo ciclo for de fora
    { 
        var count=0; // conta o numero de0 ocorrencias
        console.log("para arrays[i] = " + arrays[i] + ":")
        for (var j=0; j<arrays.length;j++)
        {
            console.log("vai fazer para arrays[j] = " + arrays[j])
            if ( arrays[j] == arrays[i])
            {
              count=count+1 // = ou count++  
            }
        }
        if (count>= max)
        {
            max = count // atualiza o count com um novo maximo valor encontrado
            result= arrays[i]
        }

    }

    return result+ " (" + max + " ocorrencias)"

}


console.log (repeat([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))



