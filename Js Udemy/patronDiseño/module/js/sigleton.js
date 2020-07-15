const alumnos = {
    //Todos los alumnos
    listaAlumnos : [],

    //Obtener un alumno
    get : function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },
    //Crear un alumno
    crear : function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
    },

    //Listar todos los alumnos
    listado : function(){
        return this.listaAlumnos;
    }
}
 const infoAlumno1 = {
    nombre :'Mirko',
    edad: 15
 }
 const infoAlumno2 = {
    nombre :'Branca',
    edad: 25
 }

 alumnos.crear(infoAlumno1);
 alumnos.crear(infoAlumno2);

 const listado = alumnos.listado();
 console.log(listado);

 const alumno = alumnos.get(0);
 console.log(alumno);
