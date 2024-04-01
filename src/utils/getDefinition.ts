import { DictionaryDefinition, DefinitionNotFound } from "./getDefinition.types";

async function getDefinition(searchTerm: string) {
    const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
    const definitions = await request.json();
    if (Array.isArray(definitions)) {
        return Array.from(definitions) as DictionaryDefinition[]
    } else {
        return definitions as DefinitionNotFound;
    }
}

export default getDefinition;