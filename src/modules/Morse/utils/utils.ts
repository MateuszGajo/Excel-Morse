import { MORSE_CODE, MORSE_CODE_INVALID_CHAR } from "../constant";

export const decodeMessage = (morseMessage: string) => {
  const words = morseMessage.split("/");

  return words.flatMap((item) => translateWords(item)).join("");
};

const translateWords = (item: string) => {
  const letters = item.split(" ").filter(Boolean);

  return letters.map((lett) => translateLetter(lett));
};

const translateLetter = (morseChars: string) => {
  const letter = MORSE_CODE[morseChars as keyof typeof MORSE_CODE];

  return letter ? letter : MORSE_CODE_INVALID_CHAR;
};
