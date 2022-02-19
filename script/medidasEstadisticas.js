var mediaInput = document.getElementById("media");
var medianaInput = document.getElementById("mediana");
var modaInput = document.getElementById("moda");
var ponderadoInput = document.getElementById("ponderado");
var resultado = document.getElementById("result");
var peso = document.getElementById("card__peso");
var lbl = document.getElementById("card__lblPeso");

ponderadoInput.onclick=function(){
    peso.className = 'show';
    lbl.className = 'show';
}

var hide = [mediaInput, medianaInput, modaInput];

for (const input of hide) {
    input.onclick=function(){
        peso.className = 'hide';
        lbl.className = 'hide';
    }
}

function ordenar(lista){
    lista.sort(function(a, b) {return a - b;});
    return lista;
}

//      Media

function promedio(lista){
    const suma = lista.reduce(
        function(sumaValores = 0, elemento){
            return sumaValores += Number(elemento);
        }
    );
    var promedio = suma/lista.length;
    return promedio;
}

///     Mediana

function mediana(lista){
    var listaOrdenada = ordenar(lista);
    const longitud = Number(listaOrdenada.length);
    const mitad = parseInt(longitud/2);
    var mediana;
    if(longitud % 2 === 0){
        mediana = promedio([mitad,(mitad+1)])
        return mediana;
    }else{
        return listaOrdenada[mitad];
    }
}

///     Moda

function moda(lista){
    const contarElementos={};
    var listaElementos = [];
    lista.map(
        function(elemento){
            if(contarElementos[elemento]){
                contarElementos[elemento]+=1;
            }else{
                contarElementos[elemento]=1;
            }
        }
    );
    listaElementos = Object.entries(contarElementos);
    var listaOrdenada = listaElementos.sort(function(a, b){
        return a[1] - b[1];
    });

    var moda = listaOrdenada[listaOrdenada.length-1];
    return moda[0];
}


function ponderado(listaValores, listaPeso){
    if(listaValores.length == listaPeso.length){
        var promedioP
        var sumaValores =0;
        var sumaPeso = 0;
        for (var i =0; i<listaValores.length; i++){
            sumaValores+=(listaValores[i]*listaPeso[i]);
            sumaPeso+=listaPeso[i];
        }
        promedioP = sumaValores/sumaPeso;
        return "El promedio ponderado es: "+promedioP;
    }else{
        return "Datos no Coinciden"
    }
}


function calcular(){
    var listaInput = document.getElementById("card__datos");
    var listaPesoInput = document.getElementById("card__peso");
    var listaPeso = JSON.parse("[" + listaPesoInput.value  + "]");
    var lista = JSON.parse("[" + listaInput.value  + "]");
    if(lista.length==0){
        alert("Faltan datos");
    }else{
        switch(true){
            case mediaInput.checked:
                var prom = promedio(lista);
                resultado.innerText="El promedio es: "+prom;
                break;
            case modaInput.checked:
                var mod = moda(lista);
                resultado.innerText="La moda es: "+mod;
                break;
            case medianaInput.checked:
                var med = mediana(lista);
                resultado.innerText="La mediana es: "+med;
                break;
            
            case ponderadoInput.checked:
                var promP = ponderado(lista,listaPeso);
                resultado.innerText=promP;
                break;
            default:
                resultado.innerText="Seleccione una opción";
        }
    }
}