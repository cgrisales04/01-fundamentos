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

const getEmpleado = async (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id == id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);
  });
};

const getSalario = async (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id == id)?.salario;
    salario ? resolve(salario) : reject(`No existe el salario con id ${id}`);
  });
};

const id = 3;

const getInfoUsuario = async (id) => {
  try {
    const nombre = await getEmpleado(id);
    const salario = await getSalario(id);
    return `${nombre} tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

getInfoUsuario(id)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
