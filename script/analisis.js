

var mediaInput = document.getElementById("media");
var medianaInput = document.getElementById("mediana");
var modaInput = document.getElementById("moda");
var medianatopInput = document.getElementById("medianatop")
var result = document.getElementById("result");

const salariosPeru = peru.map(
    function(persona){
        return persona.salario;
    }
);

const salariosOrdenados = salariosPeru.sort(
    function(a, b){
        return a - b;
    }
);

function promedio(lista){
    const suma = lista.reduce(
        function(sumaValores = 0, elemento){
            return sumaValores += Number(elemento);
        }
    );
    var promedio = suma/lista.length;
    return promedio;
}


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


function medianaGeneral(lista){
    const longitud = Number(lista.length);
    const mitad = parseInt(longitud/2);
    var mediana;
    if(longitud % 2 === 0){
        mediana = promedio([lista[mitad],lista[(mitad+1)]])
        return mediana;
    }else{
        mediana = lista[mitad];
        return mediana;
    }
}

// // // TOP 10% // // //

function medianaTop(lista){
    var start = lista.length*0.9;
    const cuenta = lista.length - start;
    const listaTop = salariosOrdenados.splice(start, cuenta);

    const longitud = Number(listaTop.length);
    const mitad = parseInt(longitud/2);
    var mediana;
    if(longitud % 2 === 0){
        mediana = promedio([listaTop[mitad],listaTop[(mitad+1)]])
        return mediana;
    }else{
        mediana = listaTop[mitad];
        return mediana;
    }
}

function calcular(){
    switch (true) {
        case mediaInput.checked:
            var mediaPeru = promedio(salariosOrdenados);
            result.innerText = "La media salarial en el Perú es: "+mediaPeru;
            break;
        
        case medianaInput.checked:
            var medianaPeru = medianaGeneral(salariosOrdenados);
            result.innerText = "La mediana salarial en el Perú es: "+medianaPeru;
            break;
        
        case modaInput.checked:
            var modaPeru = moda(salariosOrdenados);
            result.innerText = "La moda salarial en el Perú es: "+modaPeru;
            break;

        case medianatopInput.checked:
            var medianatop = medianaTop(salariosOrdenados);
            result.innerText = "La mediana salarial peruana del Top 10% es: "+medianatop;

        default:
            break;
    }
}
