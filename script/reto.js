function validarTriangulo(lado1, lado2, lado3){
    switch(true){
        case lado1===lado2 && lado1 != lado3:
            return [lado3,lado1];
            break;
        case lado1===lado3 && lado1 != lado2:
            return [lado2,lado1];
            break;
        case lado2===lado3 && lado2 != lado1:
            return [lado1,lado2];
            break;

        case lado2!=lado3 && lado1 != lado2:
            return false;
            break;

        case lado1===lado3 && lado1 === lado2:
            return false;
            break;

        default:
            false
            break;
    }
}



function altura(lado, base){
    var altura = Math.sqrt(Math.pow(lado, 2)-(Math.pow(base, 2)/4));
    return altura;
}


function calcular(){
    const inputLado1 = document.getElementById("primerLado");
    const inputLado2 = document.getElementById("segundoLado");
    const inputLado3 = document.getElementById("tercerLado");
    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const lado3 = Number(inputLado3.value);
    var datos = validarTriangulo(lado1, lado2, lado3);
    if(datos != false){
        alert("La altura es: "+Math.trunc(altura(datos[0], datos[1])));
    }else{
        alert("No es un triangulo isoceles");
    }
}