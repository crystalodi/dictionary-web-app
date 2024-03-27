import { useState } from 'react';
import './Search.scss';
import getDefinition from '../../../utils/getDefinition';
import Main from '../../layout/main';
import SearchBox from '../../ui/search-box';

export const Search = () => {
    const [isError, setIsError] = useState(false);

    async function handleSearch(searchTerm?: string)  {
        if (!searchTerm) {
            setIsError(true);
            return;
        }

        try {
            isError && setIsError(false);
            const res = await getDefinition(searchTerm);
            console.log(`${searchTerm} results:`, res);
        } catch(e) {
            console.error(e);
        }

    }
    return (
        <Main>
            <SearchBox handleDictionarySearch={handleSearch} error={isError}/>
        </Main>
    )
}
