
"use strict";

window.addEventListener('load', init, false);

function init(e) {

    var nombres = [];
    var apellidos = [];
    var notas = [];
    var emails = [];

    var nombreInput = document.getElementById('nombreInput');
    var apellidosInput = document.getElementById('apellidosInput');
    var notaInput = document.getElementById('notaInput');
    var emailInput = document.getElementById('emailInput');

    var btnIngresar = document.getElementById('btnIngresar');

    var estudianteSlt = document.getElementById('estudianteSlt')

    var btnBuscar = document.getElementById('btnBuscar');

    agregarEstudiante('Mario', 'Lopez', '95', 'mlopez@mail.com');
    agregarEstudiante('Laura', 'Morales', '65', 'lmorales@mail.com');

    //Debes usar el onkeyup que se dispara cada ves que se detecta que una tecla se levanto en el input.
    //Aqui se hace para nombreInput pero puedes hacer uno para todos, osea sacar el codigo que se repite a una function.
    nombreInput.onkeyup = function (e) {
        if (nombreInput.value === '') {
            nombreInput.className = 'error';
        } else {
            nombreInput.className = 'sinError'
        }
    };

    apellidosInput.onchange = function () { apellidosInput.className = 'sinError' };
    notaInput.onchange = function () { notaInput.className = 'sinError' };
    emailInput.onchange = function () { emailInput.className = 'sinError' };

    /*Notas: Reto analiza lo que esta pasando aqui y mejoralo.
   1. En lugar de cambiar el color al border mejor agregar una clase de css, por ejeplo error y si estan bien quitarsela.
   2. Si un campo por ejemplo el nombre dio error y si el usuario empieza a agregar el dato que se actualice el estado del color automaticamente, usar el event onchange para eso.
   */

    btnIngresar.onclick = function (e) {

        var isOk = true;
        // var normalColor = 'rgb(189, 195, 199)';
        // var errorColor = 'red';
        // var error = window.getComputedStyle('');
        // let errorBg = error.getPropertyValue*('background-color');

        // nombreInput.style.borderColor = normalColor;
        // apellidosInput.style.borderColor = normalColor;
        // notaInput.style.borderColor = normalColor;
        // emailInput.style.borderColor = normalColor;

        //Estoy aqui no esta bien ponerlo, estas haciendo lo mismo en cada click
        // nombreInput.onchange = function() { nombreInput.className = 'sinError'};
        // apellidosInput.onchange = function() { apellidosInput.className = 'sinError'};
        // notaInput.onchange = function() { notaInput.className = 'sinError'};
        // emailInput.onchange = function() { emailInput.className = 'sinError'};

        if (nombreInput.value === '') {
            isOk = false;
            //nombreInput.style.borderColor = errorColor;
            nombreInput.className = 'error';
        }

        if (apellidosInput.value === '') {
            isOk = false;
            // apellidosInput.style.borderColor = errorColor;
            apellidosInput.className = 'error';
        }

        if (notaInput.value === '' || notaInput.value < 0 || notaInput.value > 100) {
            isOk = false;
            // notaInput.style.borderColor = errorColor;
            notaInput.className = 'error';
        }

        if (emailInput.value === '') {
            isOk = false;
            // emailInput.style.borderColor = errorColor;
            emailInput.className = 'error';
        }

        if (isOk) {
            agregarEstudiante(nombreInput.value, apellidosInput.value, notaInput.value, emailInput.value);
            clearInputs();
        } else {
            alert('Ingresar los datos marcados.');
        }

    }


    function agregarEstudiante(nombre, apellido, nota, email) {
        nombres.push(nombre);
        apellidos.push(apellido);
        notas.push(nota);
        emails.push(email);
        var index = nombres.length - 1;
        console.log(index);

        var option = document.createElement('option');
        option.value = index;
        option.innerHTML = nombres[index] + ' ' + apellidos[index];
        estudianteSlt.appendChild(option);

        console.log(option);
    }

    function clearInputs(e) {
        nombreInput.value = '';
        apellidosInput.value = '';
        emailInput.value = '';
        notaInput.value = '';
    }

}
