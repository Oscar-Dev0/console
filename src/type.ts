import * as functions from "./functions";

// Tipo auxiliar que extiende `Console` con las funciones solo si están activadas
export type ExtendedConsole<T extends boolean = false> = T extends true
  ? {
    [K in keyof typeof functions]: typeof functions[K];
  }
  : {};