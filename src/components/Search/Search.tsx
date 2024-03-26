import { useState } from 'react';
import { Main } from '../layout';
import './Search.scss';
import { SearchInput } from './search-input/SearchInput';

export const Search = () => {
    const [isError, setIsError] = useState(false);
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = (searchTerm?: string) => {
        if (!searchTerm) {
            setIsError(true);
            return;
        }

        isError && setIsError(false);
    }
    return (
        <Main>
            <SearchInput handleDictionarySearch={handleSearch} error={isError}/>
        </Main>
    )
}
