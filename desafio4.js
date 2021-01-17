//var nombreUno = prompt("Ingrese Nombre y Apellido del alumno 1: ")
//var nombreDos = prompt("Ingrese Nombre y Apellido del alumno 2: ")
//var nombreTres = prompt("Ingrese Nombre y Apellido del alumno 3: ")

//console.log(nombreUno, nombreDos, nombreTres)

var primerAlumno = 0;
var segundoAlumno = 0;
var tercerAlumno = 0;

var totales = primerAlumno + segundoAlumno + tercerAlumno;

function alumnoUno(){
    var nombreUno = prompt("Ingrese Nombre y Apellido del alumno 1: ")
    var notaUno_alumnoUno = prompt("Ingrese nota del primer mes: ");
    var notaDos_alumnoUno = prompt("Ingrese nota del segundo mes: ");
    var notaTres_alumnoUno  = prompt("Ingrese nota del tercer mes: ");
    var promedioTrimestre = (Number(notaUno_alumnoUno) + Number(notaDos_alumnoUno) + Number(notaTres_alumnoUno)) /3;
    
    if (promedioTrimestre >=7){
        document.write ("El nombre del primer Alumno es:" + " " + nombreUno + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre + ", " + "está aprobado!<br> ");
        console.log ("El nombre del primer Alumno es:" + " " + nombreUno + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre + ", " + "está aprobado! ");
    }else {
        document.write ("El nombre del primer Alumno es:" + " " + nombreUno + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre + ", " + "está desaprobado!<br> ");
        console.log ("El nombre del primer Alumno es:" + " " + nombreUno + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre + ", " + "está desaprobado! ");
    }
    
    return primerAlumno;
}

function mostrar(){
    var resultado = alumnoUno();
    document.getElementById("totales").innerHTML = `<b>${totales}</b>`
}

function alumnoDos(){
    var nombreDos = prompt("Ingrese Nombre y Apellido del alumno 2: ")
    var notaUno_alumnoDos = prompt("Ingrese nota del primer mes: ");
    var notaDos_alumnoDos = prompt("Ingrese nota del segundo mes: ");
    var notaTres_alumnoDos = prompt("Ingrese nota del tercer mes: ");
    var promedioTrimestre_alumnoDos = (Number(notaUno_alumnoDos) + Number(notaDos_alumnoDos) + Number(notaTres_alumnoDos)) /3;

    if (promedioTrimestre_alumnoDos >=7){
        document.write ("El nombre del segundo Alumno es:" + " " + nombreDos + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoDos + ", " + "está aprobado!<br>  ");
        console.log ("El nombre del segundo Alumno es:" + " " + nombreDos + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoDos + ", " + "está aprobado! ");
    }else {
        document.write ("El nombre del segundo Alumno es:" + " " + nombreDos + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoDos + ", " + "está desaprobado!<br>  ");
        console.log ("El nombre del segundo Alumno es:" + " " + nombreDos + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoDos + ", " + "está desaprobado! ");
    }
    
    return segundoAlumno;
}

function mostrarDos(){
    var resultado = alumnoDos();
    document.getElementById("segundoAlumno").innerHTML = `<b>${segundoAlumno}</b>`
}

function alumnoTres(){
    var nombreTres = prompt("Ingrese Nombre y Apellido del alumno 3: ")
    var notaUno_alumnoTres = prompt("Ingrese nota del primer mes: ");
    var notaDos_alumnoTres = prompt("Ingrese nota del segundo mes: ");
    var notaTres_alumnoTres = prompt("Ingrese nota del tercer mes: ");
    var promedioTrimestre_alumnoTres = (Number(notaUno_alumnoTres) + Number(notaDos_alumnoTres) + Number(notaTres_alumnoTres)) /3;

    if (promedioTrimestre_alumnoTres >=7){
        document.write ("El nombre del tercer Alumno es:" + " " + nombreTres + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoTres + ", " + "está aprobado! <br> ");
        console.log ("El nombre del tercer Alumno es:" + " " + nombreTres + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoTres + ", " + "está aprobado! ");
    }else {
        document.write ("El nombre del tercer Alumno es:" + " " + nombreTres + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoTres + ", " + "está desaprobado!<br>  ");
        console.log ("El nombre del tercer Alumno es:" + " " + nombreTres + " " + "y su promedio trimestral fué de" + " " + promedioTrimestre_alumnoTres + ", " + "está desaprobado! ");
    }

    return tercerAlumno;
}


function mostrarTres(){ 
    var resultado = alumnoTres();
    document.getElementById("tercerAlumno").innerHTML = `<b>${tercerAlumno}</b>`
}