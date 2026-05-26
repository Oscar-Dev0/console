import kleur, { type Kleur } from "kleur";

function center(text: string): void {
  if (!text || typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  const terminalWidth = process.stdout.columns || 80;
  const spaces = " ".repeat(Math.max(0, Math.floor((terminalWidth - txt.length) / 2)));

  return console.log(spaces + text);
}

function removeANSIFormat(str: string): string {
  return str.replace(/\u001b\[[0-9;]*m/g, "");
}

function square(text: string, textC: keyof Kleur = "green", borderC: keyof Kleur = "blue"): void {
  if (typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  const border = kleur[borderC];
  const textColor = kleur[textC];
  const horizontal = "-".repeat(txt.length + 4);

  center(border(`+${horizontal}+`));
  center(border("|  ") + textColor(txt) + border("  |"));
  center(border(`+${horizontal}+`));
}

export {
  center,
  square,
  removeANSIFormat,
};
