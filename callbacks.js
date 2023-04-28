const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Cristian",
  };
  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioByID(1, ({ nombre, id }) => {
  console.log(`Hola ${nombre}`);
});
