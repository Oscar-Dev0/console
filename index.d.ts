import kleur, { Kleur } from "kleur";

declare global {
  interface Console {
    center: typeof center;
    removeANSIFormat: typeof removeANSIFormat;
    square: typeof square;
  }
}

/**
 * Centers the given text on the console.
 *
 * @param { string } text The text to center.
 */
export function center(text: string): void;

/**
 * Removes ANSI formatting from the given string.
 *
 * @param { string } str The string to remove ANSI formatting from.
 * @returns The string without ANSI formatting.
 */
export function removeANSIFormat(str: string): string;

/**
 * Displays the given text in a square on the console, with the given border and text colors.
 *
 * @param text The text to display.
 * @param textC The color of the text.
 * @param borderC The color of the border.
 */
export function square(text: string, textC?: colors, bordeC?: colors): void;
export type colors = keyof Kleur;
