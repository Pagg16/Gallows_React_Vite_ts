import { words } from "../constants/wordList.json";

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * (words.length - 1))];
}
