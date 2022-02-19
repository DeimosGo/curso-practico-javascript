var cupones = [
    {
        cupon: "cupon_1",
        descuento: 10
    },
    {
        cupon: "cupon_2",
        descuento: 30
    },
    {
        cupon: "cupon_3",
        descuento: 50
    },
    {
        cupon: "cupon_4",
        descuento: 60
    }
];

function calcularDescuento(precio, descuento){
    const porcentaje = descuento/100;
    const precioDescuento =precio-(precio*porcentaje);
    return precioDescuento;
}


function encontrar(cupon){
    return cupones.find(function(busqueda){
        return busqueda.cupon === cupon;
    });
}

function calcular(){
    const inputPrecio = document.getElementById("precio");
    const inputDescuento = document.getElementById("descuento");
    const inputCupon = document.getElementById("cupon");
    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);
    const cuponStr = inputCupon.value;
    var precioNuevo = calcularDescuento(precio, descuento);
    var cuponProcesar = encontrar(cuponStr);
    var precioFinal;
    if(cuponProcesar != undefined){
        precioFinal = calcularDescuento(precioNuevo, cuponProcesar.descuento);
        result.innerText = "El precio que pagaras es: S/."+precioFinal;
        cuponp.innerText = "";
    }else{
        result.innerText = "El precio que pagaras es: S/."+precioNuevo;
        cuponp.innerText = "El cupon ingresado es invalido";
    }
}