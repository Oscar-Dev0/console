require("colors");
function center(text) {
  if (!text || typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  const spaces = " ".repeat(
    Math.max(0, (process.stdout.columns - txt.length) / 2),
  );
  console.log(spaces + text);
}

function removeANSIFormat(str) {
  const ANSIRegexformat = /\u001b\[\d{1,2}m/g;

  const cleanStr = str.replace(ANSIRegexformat, "");
  return cleanStr;
}

function square(text, textC = "green", borderC = "blue") {
  if (typeof text !== "string") return;

  const txt = removeANSIFormat(text);
  center(("╭──" + "─".repeat(txt.length) + "──╮")[borderC]);
  center("│  "[borderC] + txt[textC] + "  │"[borderC]);
  center(("╰──" + "─".repeat(txt.length) + "──╯")[borderC]);
}

module.exports = {
  center,
  square,
  removeANSIFormat,
};
