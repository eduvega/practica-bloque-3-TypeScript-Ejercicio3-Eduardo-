// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.

// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.

// Luego, debéis crear una función llamada "getData"( va a ser generica, y va a ser del mismo tipo que el gnerico) que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.

// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis!

import { UserData } from "./user-data";
let user: UserData;

user = {
  name: "El pepe",
  age: 21,
  phone: 123456789
};

function isNumber<T>(arg: T): boolean {
  return typeof arg ==="number";
}

function getData<T>(arg: T): void {
  if (isNumber(arg)) {
    console.log("El telefono: " + arg);
  }else{
    console.log("El nombre es: " + arg);
  }

}

/* let a = getData<String>(user.name);
let b = getData<number>(user.age);
let c = getData<number>(user.phone);
 */