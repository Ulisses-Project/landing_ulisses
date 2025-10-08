import es from "./es";
import en from "./en";

export const translations = { en, es };
export type Language = keyof typeof translations;
