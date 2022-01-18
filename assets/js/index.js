// Activación JQuery
$(document).ready(function(){
    // Operaciones matemáticas
    $(".opMat").click(function(){

        //Solicitar imputs
        var valor1 = parseInt(prompt("Ingrese el 1er número (mayor a cero): "));
        var valor2 = parseInt(prompt("Ingrese el 2do número (mayor a cero): "));
        //Asignar variables a operaciones matemáticas entre imputs
        var opSuma = valor1 + valor2;
        var opResta = valor1 - valor2;
        var opMult = valor1 * valor2;
        var opDiv = valor1 / valor2;
        var opMod = valor1%valor2;
        //Resultados por DOM
        document.write("<p>La suma de los dos números, es: </p>" + opSuma);
        document.write("<p>La resta del primer numero menos el segundo, es: </p>" + opResta);
        document.write("<p>La multiplicacion de los dos números, es: </p>" + opMult);
        document.write("<p>La división de los dos números, es: </p>" + opDiv);
        document.write("<p>La operación módulo entre los dos números, es: </p>" + opMod);
    })
    // Transformacion temperatura
    $(".temperatura").click(function(){
        //Solicitar Imput
        var tempC = parseInt(prompt("Ingrese temperatura en grados Celsius: "));
        //Asignar variables a operaciones entre imputs
        var tempK = tempC + 273.15;
        var tempF = (tempC * (9/5)) + 32;
        //Resultados por DOM
        document.write("<p>La temperatura en grados Kelvin, es: </p>" + tempK);
        document.write("<p>La temperatura en grados Fahrenheit, es: </p>" + tempF);        
    })
    $(".calendario").click(function(){
        //Solicitar imput
        var dias = parseInt(prompt("Ingrese una cantidad de días a transformar: "));
        //Asignar variables a operaciones entre imputs
        var anos = Math.floor(dias / 365);
        var semanas = Math.floor((dias % 365)/7);
        var restoDias = dias - anos*365 - semanas*7;
        //Resultados por DOM
        document.write(dias +" dias, "+"son: " + anos + " año(s), " + semanas +" semana(s) y " + restoDias + " dia(s)" );
    })

    $(".cincoNum").click(function(){
        //Solicitar imput
        var num1 = parseInt(prompt("Ingrese el primero de cinco números: "));
        var num2 = parseInt(prompt("Ingrese el segundo de cinco números: "));
        var num3 = parseInt(prompt("Ingrese el tercer de cinco números: "));
        var num4 = parseInt(prompt("Ingrese el cuarto de cinco números: "));
        var num5 = parseInt(prompt("Ingrese el quinto de cinco números: "));
        //Asignar variables a operaciones entre imputs
        var sumaTotal = num1 + num2 + num3 + num4 + num5;
        var promedioTotal = sumaTotal/5;
        //Resultados por DOM
        document.write("La suma total es: " + sumaTotal + ". El promedio es: " + promedioTotal);


    })
})

