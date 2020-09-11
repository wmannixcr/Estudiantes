
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

    // nombreInput.onkeyup = function (e) {
    //     if (nombreInput.value === '') {
    //         console.log(nombreInput.value);
    //         nombreInput.className = 'error';
    //     } else {
    //         nombreInput.className = 'sinError';
    //         console.log(nombreInput.value);
    //     }
    // }


    var campos = ['nombreInput', 'apellidosInput', 'notaInput', 'emailInput'];
    var general;

    // ****** Opcion con While ********

    var i = 0;
    while (i < campos.length) {
        general = document.getElementById(campos[i]);
        general.onkeyup = function (e) {
            if (general === '') {
                general.className = 'error';
            } else {
                general.className = 'sinError';
            }
        }
        i++;
    }

    // ****** Opcion con For ********

    // for ( var i = 0; i < campos.length; i++) {
    //     general = document.getElementById(campos[i]);
    //     console.log(general);
    //     general.onkeyup = function (e) {
    //         if (general === '') {
    //             general.className = 'error';
    //         } else {
    //             general.className = 'sinError';
    //         }
    //     }
    // }

    // ****** Opcion con en una sola linea ******** 

    // nombreInput.onkeyup = function () { nombreInput.className = 'sinError' };
    // apellidosInput.onkeyup = function () { apellidosInput.className = 'sinError' };
    // notaInput.onkeyup = function () { notaInput.className = 'sinError' };
    // emailInput.onkeyup = function () { emailInput.className = 'sinError' };

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

    // btnIngresar.onclick = function (e) {

    //     if (nombreInput.value === '') {
    //         alert('Ingresar el Nombre');
    //         return;
    //     }

    //     if (apellidosInput.value === '') {
    //         alert('Ingresar los Apellidos');
    //         return;
    //     }

    //     if (notaInput.value === '') {
    //         alert('Ingresar la Nota');
    //         return;
    //     }

    //     if (notaInput.value < 0 || notaInput.value > 100) {
    //         alert('Nota invalida, ingresar un valor entre 0 y 100');
    //         return;
    //     }

    //     if (emailInput.value === '') {
    //         alert('Ingresar el Email');
    //         return;
    //     }

    //     agregarEstudiante(nombreInput.value, apellidosInput.value, notaInput.value, emailInput.value);

    //     clearInputs();

    //     console.log(nombres);
    // }

    btnBuscar.onclick = function (e) {
        var indexEstudiante = Number(estudianteSlt.value);
        document.getElementById('informacion').innerHTML = 'Información:' + ' ' + nombres[indexEstudiante] + ' ' + apellidos[indexEstudiante] + ',' + ' ' + 'nota' + ' ' + notas[indexEstudiante] + ',';
        if(notas[indexEstudiante] >= 70) {
            document.getElementById('aprobado').innerHTML = 'Abrobado';
            document.getElementById('aprobado').style.color = '#27ae60';
        } else {
            document.getElementById('aprobado').innerHTML = 'No Abrobado';
            document.getElementById('aprobado').style.color = '#c23616';
        }
        console.log(indexEstudiante);
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
