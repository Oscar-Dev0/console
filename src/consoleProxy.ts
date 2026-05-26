import * as functions from "./functions";

export default function consoleProxy(baseConsole: Console): Console {
  return new Proxy(baseConsole, {
    get(target: Console, property: string | symbol) {
      if (property in functions) {
        return functions[property as keyof typeof functions];
      }

      return target[property as keyof Console];
    },
  });
}
