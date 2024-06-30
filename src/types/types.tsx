// Response when the word data is found
export interface WordDataResponse {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio: string;
  }>;
  sourceUrls: Array<string>;
  meanings: Array<object>;
}

// Response when no data is found
export interface WordDataNotFound {
  title: string;
  message: string;
  resolution: string;
}

// Curated word data to be used in the app
export interface CuratedWordData {
  // Expected type | null if no data is found | undefined if the data is not yet fetched
  word: string | undefined;
  phonetic: string;
  audioURL: string | null;
  sourceURL: string;
  meanings: Array<Meanings> | null;
}

// Meanings of the word, eg. noun, verb, etc.
export interface Meanings {
  partOfSpeech?: string;
  definitions?: ReadonlyArray<{
    definition?: string;
    example?: string;
  }>;
  synonyms?: Array<string>;
}

export type Font = "Serif" | "Sans-serif" | "Mono";

export type DefinitionObject = NonNullable<Meanings["definitions"]>[number];
