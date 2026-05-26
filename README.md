# @oscardev/console

Small helpers for styled Node.js console output, powered by `kleur`.

## Install

```sh
pnpm add @oscardev/console
```

## Usage

```ts
import kleur, { center, consoleExtensions, square } from "@oscardev/console";

console.log(kleur.green("Ready"));
center("Centered text");
square("Hello");

consoleExtensions.enable();
console.center("Available on global console");
console.square("Also available here");
consoleExtensions.disable();
```

## API

- `center(text)`: prints centered text using the current terminal width.
- `square(text, textColor?, borderColor?)`: prints text inside a colored ASCII box.
- `removeANSIFormat(text)`: strips ANSI color codes from text.
- `consoleExtensions.enable()`: adds the helpers to `globalThis.console`.
- `consoleExtensions.disable()`: restores the original console.
- `consoleExtensions.isEnabled()`: returns whether the proxy is active.
