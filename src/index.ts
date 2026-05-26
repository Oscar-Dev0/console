import consoleProxy from "./consoleProxy";
import type { ConsoleExtensionMethods } from "./type";
import kleur from "kleur";

let extensionsEnabled = false;
const nativeConsole = globalThis.console;

export const consoleExtensions = {
  enable() {
    if (!extensionsEnabled) {
      globalThis.console = consoleProxy(nativeConsole);
    }

    extensionsEnabled = true;
  },

  disable() {
    globalThis.console = nativeConsole;
    extensionsEnabled = false;
  },

  isEnabled() {
    return extensionsEnabled;
  },
};

declare global {
  interface Console extends ConsoleExtensionMethods {}
}

export * from "./functions";
export default kleur;
