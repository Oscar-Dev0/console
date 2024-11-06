import * as functions from "./functions";
import { ExtendedConsole } from "./type";


// Crea un proxy que añade dinámicamente las funciones de `functions` a `console`
export default () => {
  return new Proxy(console, {
    get(target: Console, property: string | symbol) {
      if (property in functions) {
        return (functions as any)[property];
      }
      return (target as any)[property];
    },
  });
};

