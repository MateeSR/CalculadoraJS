var valor, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, suma, resta, multiplicar, dividir, reset, operaciones;
var operando1 
var operando2
var operacion 


function iniciarVariables() {
    valor = document.getElementById("valor");
    uno = document.getElementById("1");
    dos = document.getElementById("2");
    tres = document.getElementById("3");
    cuatro = document.getElementById("4");
    cinco = document.getElementById("5");
    seis = document.getElementById("6");
    siete = document.getElementById("7");
    ocho = document.getElementById("8");
    nueve = document.getElementById("9");
    cero = document.getElementById("0");
    suma = document.getElementById("+");
    resta = document.getElementById("-");
    multiplicar = document.getElementById("x");
    dividir = document.getElementById("÷");
    igual = document.getElementById("=");
    reset = document.getElementById("reset");
    porcentaje = document.getElementById("%");
}


function apretarBotonesNumericos() {
    uno.onclick = function(e) {
        valor.innerText = valor.innerText + "1";
    }
    dos.onclick = function(e) {
        valor.innerText = valor.innerText + "2";
    }
    tres.onclick = function(e) {
        valor.innerText = valor.innerText + "3";
    }
    cuatro.onclick = function(e) {
        valor.innerText = valor.innerText + "4";
    }
    cinco.onclick = function(e) {
        valor.innerText = valor.innerText + "5";
    }
    seis.onclick = function(e) {
        valor.innerText = valor.innerText + "6";
    }
    siete.onclick = function(e) {
        valor.innerText = valor.innerText + "7";
    }
    ocho.onclick = function(e) {
        valor.innerText = valor.innerText + "8";
    }
    nueve.onclick = function(e) {
        valor.innerText = valor.innerText + "9";
    }
    cero.onclick = function(e) {
        valor.innerText = valor.innerText + "0";
    }
    
}

function reiniciar(){
    valor.innerText = "";

}
    
 function limpiar() {
    valor.innerText = "";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
}

function apretarBotonesOperadores() {
    suma.onclick = function(e) {
        operando1 = valor.innerText;
        operacion = "+";    
        reiniciar();
    }
    resta.onclick = function(e) {
        operando1 = valor.innerText;
        operacion = "-";    
        reiniciar();
    }
    multiplicar.onclick = function(e) {
        operando1 = valor.innerText;
        operacion = "*";    
        reiniciar();
    }
    dividir.onclick = function(e) {
        operando1 = valor.innerText;
        operacion = "/";    
        reiniciar();
    }
    porcentaje.onclick = function(e) {
        operando1 = valor.innerText;
        operacion = "%"
        reiniciar();
    }

    igual.onclick = function(e) {
        operando2 = valor.innerText;
        resolver();
    }
    reset.onclick = function(e) {
        reiniciar();
    }


}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operando1) + parseFloat(operando2);
        break;
      case "-":
        res = parseFloat(operando1) - parseFloat(operando2);
        break;
      case "*":
        res = parseFloat(operando1) * parseFloat(operando2);
        break;
      case "%":
        res = parseFloat(operando1) % parseFloat(operando2);
        break;
      case "/":
        if (parseFloat(operando2) === 0) {
            res = `No se puede \n dividir entre cero`
            valor.innerHTML = res;
            limpiar();
        }else {
            res = parseFloat(operando1) / parseFloat(operando2);
            break;
        }
    }
    
    limpiar();
    valor.innerText = res;
  }



iniciarVariables();
apretarBotonesNumericos();
apretarBotonesOperadores();
















