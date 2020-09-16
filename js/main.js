
"use strict";

window.addEventListener('load', init, false);

function init(e) {

    // var nombres = [];
    // var apellidos = [];
    // var notas = [];
    // var emails = [];

    // var nombreInput = document.getElementById('nombreInput');
    // var apellidosInput = document.getElementById('apellidosInput');
    // var notaInput = document.getElementById('notaInput');
    // var emailInput = document.getElementById('emailInput');

    var bdEstudiantes = [];

    var estudiante = {nombreInput:document.getElementById('nombreInput'), apellidosInput:document.getElementById('apellidosInput'), notaInput:document.getElementById('notaInput'), emailInput:document.getElementById('emailInput')};

    var btnIngresar = document.getElementById('btnIngresar');

    var estudianteSlt = document.getElementById('estudianteSlt')

    var btnBuscar = document.getElementById('btnBuscar');

    var btnEliminar = document.getElementById('btnEliminar');

    agregarEstudiante('Mario', 'Lopez', '95', 'mlopez@mail.com');
    agregarEstudiante('Laura', 'Morales', '65', 'lmorales@mail.com');


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

    btnIngresar.onclick = function (e) {

        var isOk = true;

        if (nombreInput.value === '') {
            isOk = false;
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
            validaEmail(emailInput.value);
            clearInputs();
        } else {
            alert('Ingresar los datos marcados.');
        }

    };

    function validaEmail (email) {

        var indice = bdEstudiantes.length - 1;

        for ( var i = 0; i <= indice; i++ ) {
            if (email === bdEstudiantes[i].emailInput) {
                alert('El estudiante ya existe');
                return;
            }
        }

        agregarEstudiante(nombreInput.value, apellidosInput.value, notaInput.value, emailInput.value);
    }

    function agregarEstudiante(nombre, apellidos, nota, email) {

        bdEstudiantes.push({nombreInput:nombre, apellidosInput:apellidos, notaInput:nota, emailInput:email});

        console.log(bdEstudiantes);

        var index = bdEstudiantes.length - 1;
        console.log(index);

        var option = document.createElement('option');
        option.value = index;
        option.innerHTML = bdEstudiantes[index].nombreInput + ' ' + bdEstudiantes[index].apellidosInput;
        estudianteSlt.appendChild(option);

        // Agrego una nueva propiedad idSelector para guardar el valor de la opcion del Select

        Object.defineProperty(bdEstudiantes[index], 'idSelector', {value:index});
        console.log(option);
    }

    btnBuscar.onclick = function (e) {
        var indexEstudiante = Number(estudianteSlt.value);
        console.log(indexEstudiante);

        document.getElementById('informacion').innerHTML = 'Información:' + ' ' + bdEstudiantes[indexEstudiante].nombreInput + ' ' + bdEstudiantes[indexEstudiante].apellidosInput + ',' + ' ' + 'nota' + ' ' + bdEstudiantes[indexEstudiante].notaInput + ',';

        if(bdEstudiantes[indexEstudiante].notaInput >= 70) {
            document.getElementById('aprobado').innerHTML = 'Abrobado';
            document.getElementById('aprobado').style.color = '#27ae60';
        } else {
            document.getElementById('aprobado').innerHTML = 'No Abrobado';
            document.getElementById('aprobado').style.color = '#c23616';
        }
        console.log(indexEstudiante);
    }

    // Boton y funcion para eliminar la opcion del select y el objeto del array

    btnEliminar.onclick = function (e) {
        var indexSelect = Number(estudianteSlt.value);

        estudianteSlt.remove(estudianteSlt.value[indexSelect]);
        //console.log(estudianteSlt.value);

        eliminaEstudiante(indexSelect);
    }
    
    function eliminaEstudiante (index) {
        var indice = bdEstudiantes.length - 1;

        for ( var i = 0; i <= indice; i++ ) {
            if (index === bdEstudiantes[i].idSelector) {

                document.getElementById('informacion').innerHTML = 'El estudiante' + ' ' + bdEstudiantes[i].nombreInput + ' ' + bdEstudiantes[i].apellidosInput + ' ' + 'fue eliminado.';

                bdEstudiantes.splice(i,1);
               
                return;
            }
        }
    }
    
    //console.log(bdEstudiantes);

    function clearInputs(e) {
        nombreInput.value = '';
        apellidosInput.value = '';
        emailInput.value = '';
        notaInput.value = '';
    }


    console.log(bdEstudiantes);

}

