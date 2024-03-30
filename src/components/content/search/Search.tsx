import { useState } from 'react';
import './Search.scss';
import getDefinition from '../../../utils/getDefinition';
import Main from '../../layout/main';
import SearchBox from '../../ui/search-box';
import NotFound from '../not-found';
import { Definition, DefinitionNotFound } from '../../../utils/getDefinition.types';

const Search = () => {
    const [isError, setIsError] = useState<boolean>();
    const [definitions, setDefinitions] = useState<Definition[] | DefinitionNotFound>();

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
                    {Array.isArray(definitions) ? (
                        <div className='search__definition'>
                           {definitions.toString()}
                        </div>
                    ) : (<NotFound {...definitions}/>) }
                </>}
            </div>
        </Main>
    )
}

export default Search;
