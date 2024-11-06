import kleur, { type Kleur } from "kleur";

function center(text: string): void {
  if (!text || typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  const spaces = " ".repeat(
    Math.max(0, (process.stdout.columns - txt.length) / 2)
  );
  return console.log(spaces + text);
}

function removeANSIFormat(str: string): string {
  const ANSIRegexformat = /\u001b\[\d{1,2}m/g;
  return str.replace(ANSIRegexformat, "");
}

function square(text: string, textC: keyof Kleur = "green", borderC: keyof Kleur = "blue"): void {
  if (typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  center(kleur[borderC]("╭──" + "─".repeat(txt.length) + "──╮"));
  center(kleur[borderC]("│  ") + kleur[textC](txt) + kleur[borderC]("  │"));
  center(kleur[borderC]("╰──" + "─".repeat(txt.length) + "──╯"));
}

export {
  center,
  square,
  removeANSIFormat,
};