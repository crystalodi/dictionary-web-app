import { useState } from 'react';
import getDefinition from '../../../utils/getDefinition';
import Main from '../../layout/main';
import SearchBox from '../../ui/search-box';
import NotFound from '../not-found';
import { DictionaryDefinition, DefinitionNotFound } from '../../../utils/getDefinition.types';
import Definition from '../definition';
import './Search.scss';

const Search = () => {
    const [isError, setIsError] = useState<boolean>();
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [definitions, setDefinitions] = useState<DictionaryDefinition[] | DefinitionNotFound>();

    async function handleSearch(searchTerm: string)  {
        if (!searchTerm) {
            setIsError(true);
            return;
        }

        setDefinitions(undefined)
        setIsSearching(true);
        setIsError(false);
        const res = await getDefinition(searchTerm);
        setDefinitions(res);
        setIsSearching(false);
    }

    const renderDefinitions = (definitionsToRender: DictionaryDefinition[]) => {
        return (
            <div className='search__definitions'>
                {definitionsToRender.map((definition, index, arr) => {
                    const props = {...definition, index, total: arr.length}
                    return <Definition {...props} key={definition.word + index + new Date().getTime()}/>
                })}
            </div>
        )
    }

    return (
        <Main>
            <SearchBox handleDictionarySearch={handleSearch} validationError={isError} placeholder='Search for any word...' disabled={isSearching}/>
            {!!definitions && <div className='search'>
                {Array.isArray(definitions) ? renderDefinitions(definitions) : <NotFound {...definitions}/>}
            </div>}
        </Main>
    )
}

export default Search;
