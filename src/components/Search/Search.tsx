import './Search.scss';
import { ReactComponent as SearchBoxIcon } from './icon-search.svg';
import { useRef, useState } from 'react';

function Search() {
    const searchBoxInput = useRef<HTMLInputElement>(null);
    const [error, setError] = useState(false);

    const handleSearch = () => {
        setError((oldState) => !oldState);
        console.log('error', error);
    }

    return (
        <div className="search">
            <div className="search-box">
                <div className="search-box__input-wrapper">
                    <input type="text" className="search-box-input" ref={searchBoxInput}/>
                    <span className="search-box-input-icon" role="button" onClick={handleSearch} tabIndex={0}>
                        <SearchBoxIcon/>
                    </span>
                </div>
                <p className="search-box-validation">
                    Whoops, can't be empty...
                </p>
            </div>
        </div>
    )
}

export default Search;