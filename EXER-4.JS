
//EXERCICIO 4 feito pelo andre - uma função que remova os duplicados de um array Exemplo:Entarda: [1,2,2,4,5,4,7,8,7,3,6] Saida: ["1","2","3","4","5","6","7","8"]


var unicos= function (arrays)
{
    var result=[];

    for( var i=0; i<arrays.length; i++)
    {
        if (result.length == 0) // result ainda esta vazio ...vou inserir a primeira vez  
        {
            result.push(arrays[i]);
        }
        else 
        {
            // vamos percorrer o result para ver se ja foi inserido
            var found = false;
            for( var j=0; j<result.length; j++)
            {
                if (arrays[i] == result[j])
                {
                    found = true; // encontrou um repetido
                    break;
                }
            }
            if (found == false) // se nao encontrou um repetido vou inserir 
            {
                result.push(arrays[i])
            }
        }
                                

    }

    return result
}


console.log (unicos([1,2,2,4,5,4,7,8,7,3,6]))
