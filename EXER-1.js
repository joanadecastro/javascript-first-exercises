var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};
console.log(landscape());
console.log("____________________________________________________________________________________")


var landscape2 = function(sizetraco,sizeponto,repeat) {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };
    for(var count=0; count<repeat;count++){
        flat(sizetraco);
        mountain(sizeponto);
    } 
        
   
    return result;
};
console.log(landscape2(6,10,20))

console.log("______________________________________________________________________________________________________________________________________")

 

    var flat = function(size) {
        var result = "";
        for (var count = 0; count < size; count++)
            result += "_";
        return result
    };
    var mountain = function(size) {
        var result = "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
        return result
    };



    

console.log(flat(2)+mountain(5)+flat(20)+mountain(30));

console.log("EXERCICO_________________________________________________________________________________________________________________________________1")


var first=function(arr,n){
    if(n>arr.length){
        return arr
}
    if(n<=arr.length){
        return arr.slice[0,(n-1)]
}
    if(n==null){
        return arr[0]
    }
}
console.log(first([7, 9, 0, -2]));
//7 n==null;  array[0]
console.log(first([],3));
//[] 
console.log(first([7, 9, 0, -2],3));
//[7,9,0] if arr.lenght>n  arr.slice(0,(n-1))  if arr[0]<arr< arr.lenght
console.log(first([7, 9, 0, -2],6));
//[7,9,0,-2]  enquanto arr.lenght<==n retorna arr.lenght?
console.log(first([7, 9, 0, -2],-3));
//[]








console.log("EXERCICO_________________________________________________________________________________________________________________________________2")

var palavras= function(arrays) {

    var result = ""; 
    var virgula= "";
    for(var count=0;count<arrays.length;count++){ //percorrer um array
        result=virgula+arrays[count];//array[count]vai buscar o valor da posiçao..1 volta count 0..posiçao 0..na segunda volta count 1 posiçao 1 na terceira volta) //o ciclo for se n tiver uma variavel result que acumule ele vai imprimir sempre o ultimo resultado
        virgula=","
    }
       
    return result
    
};

console.log (palavras([1,2,3,4,5,6]))               // definir funçao: var cenas = function (batatas)    para chamar a funçao: batatas([1,2,3])
console.log ("1,2,3,4,5,6")


console.log("EXERCICO_________________________________________________________________________________________________________________________________3")

var idades= function(arrays) 
{

    var menores=0;
    var adulto=0;
    var idoso=0;
    var menordez=0;
    var dezcinq=0;
    var maiorcinq=0;
    var result=""
    var virgula=","

    for(var i=0;i<arrays.length;i++)
    {
        
        if(arrays[i]<18)   // quantas pessoas sao menores de idade?-----------------------------------------------------------------------------------
        { 

            menores= menores+1
          
        } //retornou 6
        
        if((arrays[i]>=20) && (arrays[i]<=40))  // quantas pessoas  entre 20 e 40------------------------------------------------------------------------ 
        {
            adulto=adulto+1
       
        }  // retornou 4

        if(arrays[i]>60)  // Ha alguem com mais de 60 anos?-----------------------------------------------------------------------------------------------QUANDO USO BREAK OR CONTINUE?
        {
            idoso==sim // nao tenho de por return sim?
            break
           
        }

             else
            {
                idoso==nao
            }

        if(arrays[i]<10) // nº de pessoas com menos de 10 anos, entre 10 e 50, e mais de 50-----------------------------------------------------------------------------
        {
            menordez= menordez+1
        }
        
            else if(10<arrays[i]<50)
            {
                dezcinq=dezcinq+1
            }

                else (arrays[i]>50)
                {
                    maiorcinq=maiorcinq+1
                }

         result=result+menordez+virgula+dezcinq+virgula+maiorcinq  // isto so apliquei a ideia pq n tive tempo mas sei que n da certo assim. mas o resultado tera de ser em obecto ou array       
    }

   
    return idoso
}

console.log (idades([35,50,6,12,19,32,45,60,81,12,7,10,20,23,4])) // como faço para no terminal me aparecer os varios resultados????quando uma funçao tem dentro dela varias respostas e varios ifs como subdivido?

var repeat = function(arrays)  // var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
{        

    var max =0; // guarda o numero maximo de occorrencias
    var result=""; // armazenar o item do array que tem mais ocorrencias
    for(var i=0;i<arrays.length;i++)
    { 
        var count=0; // conta o numero de0 ocorrencias

        for (var j=0; j<arrays.length;j++)
        {
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



