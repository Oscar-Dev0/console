import * as functions from "./functions";

export type ConsoleExtensionMethods = {
  [K in keyof typeof functions]: typeof functions[K];
};
