
//Codigo del cuadrado

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado*4;
}
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}

/*
console.group("Cuadrados")
console.log("Los lados del cuadrado miden: "+ ladoCuadrado);
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");
console.log("El area del cuadrado es: "+areaCuadrado+"cm²");
console.groupEnd();*/

//Codigo del triangulo

const ladoTriangulo1 = 9;
const ladoTriangulo2 = 9;
const baseTriangulo = 12;
const alturaTriangulo = 10;

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1+ladoTriangulo2+baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo*alturaTriangulo)/2;
}

/*
console.group("Triangulos")
console.log(
    "Los lados del triangulo miden: "+
    ladoTriangulo1+
    "cm, "+
    ladoTriangulo2+
    "cm, "+
    baseTriangulo+
    "cm"
);
console.log("La altura del triangulo es: "+alturaTriangulo+"cm");
console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");
console.log("El area del triangulo es: "+areaTriangulo+"cm²");
console.groupEnd();*/

//Codigo del circulo

function diametroCirculo(radio){
    return radio*2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (Math.pow(radio, 2)) * Math.PI;
}

/*
console.group("Circulo")
console.log("El diametro del circulo es: "+ radio*2);
console.log("La circunferencia del circulo es: "+Math.trunc(circunferencia)+"cm");
console.log("El area del circulo es: "+Math.trunc(areaCirculo)+"cm²");
console.groupEnd();
*/


function calcularCuadrado(){
    const input = document.getElementById("lado");
    const lado = input.value;
    if(lado==""){
        alert("No hay datos")
    }else if(lado!=""){
        alert("El perimetro es: "+
        perimetroCuadrado(lado)+
        "\nEl area es: "+
        areaCuadrado(lado));
    }
    
}


function calcularTriangulo(){
    const inputPrimerLado = document.getElementById("primerLadoT");
    const inputSegundoLado = document.getElementById("segundoLadoT");
    const inputBase = document.getElementById("base");
    const inputAltura = document.getElementById("altura");
    const lado1 = Number(inputPrimerLado.value);
    const lado2 = Number(inputSegundoLado.value);
    const base = Number(inputBase.value);
    const altura = inputAltura .value;

    if(lado1=="" || lado2=="" || base=="" || altura==""){
        alert("Faltan datos")
    }else if(lado!=""){
        alert(
            "El perimetro es: "+
        perimetroTriangulo(lado1, lado2, base)+
        "\nEl area es: "+
        areaTriangulo(base, altura)
        );
    }

}

function calcularCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    if(radio==""){
        alert("No hay datos")
    }else if(radio!=""){
        alert("La circunferencia es: "+
        circunferencia(radio)+
        "\nEl area del circulo es: "+
        areaCirculo(radio));
    }
}


