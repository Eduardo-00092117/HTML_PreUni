var bandera = 0;

function escribir(n) {
    var caja = document.getElementById("calculos").value;
    document.getElementById("calculos").value = caja + n;
    bandera = 0;
}

function calcular() {
    var caja = document.getElementById("calculos").value;
    document.getElementById("calculos").value = eval(caja);
    bandera = 1;
}

function borrar(){
    if(bandera == 1){
        document.getElementById("calculos").value = "";
    } else{
        var completo = document.getElementById("calculos").value;
        var cadena2 = completo.slice(0, completo.length-1);
        document.getElementById("calculos").value = cadena2;
    }
}