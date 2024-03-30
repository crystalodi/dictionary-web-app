type License = {
    name: string;
    url: string;
}

export type Definition = {
    word: string
    phonetic: string
    phonetics: Array<{
      text: string
      audio: string
      sourceUrl: string
      license: License;
    }>
    meanings: Array<{
      partOfSpeech: string
      definitions: Array<{
        definition: string
        synonyms: Array<string>
        antonyms: Array<string>
      }>
      synonyms: Array<any>
      antonyms: Array<string>
    }>
    license: License;
    sourceUrls: Array<string>
}

export type DefinitionNotFound = {
    title: string;
    message: string;
    resolution: string;
}
  