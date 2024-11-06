import consoleProxy from "./consoleProxy";
import { ExtendedConsole } from "./type";
import kleur from "kleur";

// Variable para gestionar si las extensiones están habilitadas o no
let extensionsEnabled: boolean = false;
type extensionsEnabled = false;

// Controlador de extensiones para activar o desactivar dinámicamente
export const consoleExtensions = {
  enable() {
    // Asignar el proxy a `console` y habilitar las extensiones
    console = consoleProxy();
    extensionsEnabled = true;
  },
  disable() {
    // Restaurar el `console` original y deshabilitar las extensiones
    console = globalThis.console as Console;
    extensionsEnabled = false;
  },
  isEnabled() {
    return extensionsEnabled;
  },
};

// Declaración global para extender la interfaz `Console` solo si se activan las extensiones
declare global {
  // Usamos el tipo `ExtendedConsole` solo cuando las extensiones están habilitadas
  interface Console extends ExtendedConsole<extensionsEnabled> { }
}

export * from "./functions";
export default kleur;