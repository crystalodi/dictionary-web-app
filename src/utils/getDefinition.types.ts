type License = {
    name: string;
    url: string;
}

export type DictionaryDefinition = {
    word: string;
    phonetic: string;
    phonetics: Array<{
      text: string;
      audio: string;
      sourceUrl: string;
      license?: License;
    }>;
    meanings: Array<{
      partOfSpeech: string;
      definitions: Array<{
        definition: string;
        example?: string;
        synonyms: Array<string>;
        antonyms: Array<string>;
      }>
      synonyms: Array<string>;
      antonyms: Array<string>;
    }>
    license: License;
    sourceUrls: Array<string>;
}

export type DefinitionNotFound = {
    title: string;
    message: string;
    resolution: string;
}
  