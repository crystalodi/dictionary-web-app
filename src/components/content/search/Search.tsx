import { useState } from 'react';
import getDefinition from '../../../utils/getDefinition';
import Main from '../../layout/main';
import SearchBox from '../../ui/search-box';
import NotFound from '../not-found';
import { DictionaryDefinition, DefinitionNotFound } from '../../../utils/getDefinition.types';
import Definition from '../definition';
import Divider from '../../ui/divider';
import { ReactComponent as NewWindowIcon } from '../../../assets/icons/icon-new-window.svg'
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
            <>
                <div className='search__definitions'>
                    {definitionsToRender.map((definition, index) => {
                        const props = {
                            word: definition.word,
                            phonetics: definition.phonetics,
                            phonetic: definition.phonetic,
                            meanings: definition.meanings
                        }
                        return <Definition {...props} key={props.word + index + new Date().getTime()}/>
                    })}
                </div>
                <>
                    <Divider/>
                    <div className='search__definition__source'>
                        <div className='search__definition__source__link'>
                            <div className='search__definition__source__link-label'>Source</div>
                            <a href={definitionsToRender[0].sourceUrls[0]} target='_blank' rel="noreferrer">
                                {definitionsToRender[0].sourceUrls[0]}
                            </a>
                            <div className='search__definition__source__link-icon'>
                                <NewWindowIcon/>
                            </div>
                        </div>
                    </div>
                </>
            </>
        )
    }

    return (
        <Main>
            <SearchBox handleDictionarySearch={handleSearch} validationError={isError} placeholder='Search for any word...' disabled={isSearching}/>
            <div className='search'>
                {!!definitions && <>
                    {Array.isArray(definitions) ? (renderDefinitions(definitions)) : (<NotFound {...definitions}/>) }
                </>}
            </div>
        </Main>
    )
}

export default Search;
