//Maps al igual que los set con listas ordenadas, solamente que almanezan los valores como llave y valor
//el tipo de dato que pueden almacenar es de cualquier tipo.
//Map evita duplicados y rescribe el último valor que tiene.

//Crear Maps
//let cliente = new Map();
//Para agregar se utiliza .set('key','value')
//cliente.set('Nombre','Bruno');
//cliente.set('tipo', 'Premium');
//cliente.set('Saldo', 3000);

//Acceder alos valores
//console.log(cliente.get('Nombre'));
//console.log(cliente.get('tipo'));
//console.log(cliente.get('Saldo'));

//Métodos para los Maps
//Tamaño del map se usa .size
//console.log(cliente.size);

//Si quieres comprobar que un valor existe .has('')
//console.log(cliente.has('tipo'));

//Para obtener un valor se usa .get('')
//console.log(cliente.get('tipo'));

//Para borrar .delete('')
//cliente.delete('Nombre');
//console.log(cliente);

//Para limpiar el Map .clear()
//cliente.clear();
//console.log(cliente);

//Propiedades por default
const paciente = new Map ([['nombre','paciente'],
    ['habitacion', 'No definida']]);
paciente.set('nombre', 'Bruno');
paciente.set('habitacion', 400);
paciente.set('habitacion', 600);

//forEach en un map
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
})

console.log(paciente);


