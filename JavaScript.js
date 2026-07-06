function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('Resultado').innerHTML = "";
}

function back() {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero.substring(0, numero.length - 1);
}

function calcular() {
    var resultado = document.getElementById('Resultado').innerHTML;
    if (resultado) {
        document.getElementById('Resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('Resultado').innerHTML = "Nada para calcular";
    }
}
