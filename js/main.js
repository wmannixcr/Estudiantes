
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


    // *** Opcion de onkeyup en una sola linea, *******
    //     en cambia el estado en cada campo       

    // nombreInput.onkeyup = function () { nombreInput.className = 'sinError' };
    // apellidosInput.onkeyup = function () { apellidosInput.className = 'sinError' };
    // notaInput.onkeyup = function () { notaInput.className = 'sinError' };
    // emailInput.onkeyup = function () { emaiInput.className = 'sinError' };


    var campos = ['nombreInput', 'apellidosInput', 'notaInput', 'emailInput'];
    // var general;

    // ****** Opcion con While ********

    /*
    //Notas: No me gusta ese while para esto pero alli esta.
    //Investiga sobre className y classList
    var i = 0;
    while (i < campos.length) {
        // general = document.getElementById(campos[i]);
        document.getElementById(campos[i]).onkeyup = function (e) {
            console.log(e);
            if (e.target.value === '') {
                e.target.classList.add('error');
            } else {
                e.target.classList.remove('error');
            }
        }
        i++;
    }
    */


    //Nota: Prefiero esta solucion, ya tenias las referencias del input y ademas es mas facil de leer
    nombreInput.onkeyup = validateInput;
    apellidosInput.onkeyup = validateInput;
    notaInput.onkeyup = validateInput;
    emailInput.onkeyup = validateInput;

    function validateInput(e) {
        if (e.target.value === '') {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
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

    btnIngresar.onclick = function (e) {

        var isOk = true;

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
            apellidosInput.className = 'error';
        }

        if (notaInput.value === '' || notaInput.value < 0 || notaInput.value > 100) {
            isOk = false;
            notaInput.className = 'error';
        }

        if (emailInput.value === '') {
            isOk = false;
            emailInput.className = 'error';
        }

        if (isOk) {
            agregarEstudiante(nombreInput.value, apellidosInput.value, notaInput.value, emailInput.value);
            clearInputs();
        } else {
            alert('Ingresar los datos marcados.');
        }

    }

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
