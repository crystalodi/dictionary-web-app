async function getDefinition(searchTerm: string) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        const definitions = await response.json();
        return definitions;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export default getDefinition;