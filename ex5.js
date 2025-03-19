/**
 * Buscando a Nemo
 */

let pez1 = {
  nombre: "Dory",
  color: "azul",
};

let pez2 = {
  nombre: "Nemo",
  color: "naranja",
};

let pez3 = {
  nombre: "Sipho",
  color: "negro",
};

/**
 * Disponemos de un array de 3 objetos. Concretamente, son 3 peces.
*/ 
let bancoPeces = [pez1, pez2, pez3];

/**
 * Crea un bucle para mostrar el nombre de cada pez seguido del color del pez siguiendo este formato:
 * 
 * "El pez Dory es de color azul"
 * "El pez Nemo es de color naranja"
 * "El pez Sipho es de color negro"
 */

for (nombre of bancoPeces){
  console.log(`El pez ${nombre.nombre} es de color ${nombre.color}`);
};