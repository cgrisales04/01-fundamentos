const empleados = [
  {
    id: 1,
    nombre: "Cristian",
  },
  {
    id: 2,
    nombre: "Dayana",
  },
  {
    id: 3,
    nombre: "Cristofer",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleado) => empleado.id == id)?.nombre;
  if (empleado) {
    return callback(false, empleado);
  }
  return callback(null, `El empleado con id ${id} no existe`);
};

const getSalario = (id, callback) => {
  const salario = salarios.find((salario) => salario.id == id)?.salario;
  if (salario) {
    return callback(null, salario);
  }
  return callback(true, `El salario con id ${id} no se encontró`);
};

const user_id = 10;

getEmpleado(user_id, (err, empleado) => {
  if (err) {
    console.log("Porfavor verifica el ID");
    return console.log(empleado);
  }

  getSalario(user_id, (err, salario) => {
    if (err) {
      console.log(`No se encontro un salario para el usuario ${empleado}`);
      return salario;
    }
    return console.log(`${empleado} Tiene un salario de ${salario}`);
  });
});
