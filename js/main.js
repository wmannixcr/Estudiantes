
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

    /*
    btnIngresar.onclick = function (e) {

        if (nombreInput.value === '') {
            alert('Ingresar el Nombre');
            return;
        }

        if (apellidosInput.value === '') {
            alert('Ingresar los Apellidos');
            return;
        }

        if (notaInput.value === '') {
            alert('Ingresar la Nota');
            return;
        }

        if (notaInput.value < 0 || notaInput.value > 100) {
            alert('Nota invalida, ingresar un valor entre 0 y 100');
            return;
        }

        if (emailInput.value === '') {
            alert('Ingresar el Email');
            return;
        }

        agregarEstudiante(nombreInput.value, apellidosInput.value, notaInput.value, emailInput.value);

        clearInputs();

        console.log(nombres);
    }
    */

    /*Notas: Reto analiza lo que esta pasando aqui y mejoralo.
    1. En lugar de cambiar el color al border mejor agregar una clase de css, por ejeplo error y si estan bien quitarsela.
    2. Si un campo por ejemplo el nombre dio error y si el usuario empieza a agregar el dato que se actualice el estado del color automaticamente, usar el event onchange para eso.
    */
    btnIngresar.onclick = function (e) {

        var isOk = true;
        var normalColor = 'rgb(189, 195, 199)';
        var errorColor = 'red';
        nombreInput.style.borderColor = normalColor;
        apellidosInput.style.borderColor = normalColor;
        notaInput.style.borderColor = normalColor;
        emailInput.style.borderColor = normalColor;

        if (nombreInput.value === '') {
            isOk = false;
            nombreInput.style.borderColor = errorColor;
        }

        if (apellidosInput.value === '') {
            isOk = false;
            apellidosInput.style.borderColor = errorColor;
        }

        if (notaInput.value === '' || notaInput.value < 0 || notaInput.value > 100) {
            isOk = false;
            notaInput.style.borderColor = errorColor;
        }

        if (emailInput.value === '') {
            isOk = false;
            emailInput.style.borderColor = errorColor;
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
        if (notas[indexEstudiante] >= 70) {
            document.getElementById('aprobado').innerHTML = 'Abrobado';
            document.getElementById('aprobado').style.color = '#192a56';
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
