import { useState } from 'react';
import './Search.scss';
import getDefinition from '../../../utils/getDefinition';
import Main from '../../layout/main';
import SearchBox from '../../ui/search-box';
import NotFound from '../not-found';
import { DictionaryDefinition, DefinitionNotFound } from '../../../utils/getDefinition.types';
import Definition from '../definition';

const Search = () => {
    const [isError, setIsError] = useState<boolean>();
    const [definitions, setDefinitions] = useState<DictionaryDefinition[] | DefinitionNotFound>();

    async function handleSearch(searchTerm?: string)  {
        if (!searchTerm) {
            setIsError(true);
            return;
        }

        setDefinitions(undefined)
        setIsError(false);
        const res = await getDefinition(searchTerm);
        setDefinitions(res);
    }

    return (
        <Main>
            <SearchBox handleDictionarySearch={handleSearch} validationError={isError}/>
            <div className='search'>
                {!!definitions && <>
                    {Array.isArray(definitions) ? (<div className='search__definitions'>
                        {definitions.map((definition, index) => <Definition {...definition} key={definition.word + index}/>)}
                    </div>) : (<NotFound {...definitions}/>) }
                </>}
            </div>
        </Main>
    )
}

export default Search;
