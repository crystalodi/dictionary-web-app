import { SearchBoxComponentProps } from "./SearchBox.props"
import { ReactComponent as SearchBoxIcon } from "../../../assets/icons/icon-search.svg";
import "./SearchBox.scss";
import { useRef } from "react";

const SearchBox = (props: SearchBoxComponentProps) => {
    const {
        handleDictionarySearch,
        validationError,
        placeholder
    } = props;

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if (typeof handleDictionarySearch === 'function') {
            handleDictionarySearch(searchInputRef.current?.value ?? "");
        }
    }

    const handleOnKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            handleSearch();
        }
    }

    const inputFieldClasses = `search-box-input ${validationError ? 'search-box-input--error' : ''}`

    const microcopyClasses = `search-box__microcopy ${validationError ? 'search-box__microcopy--error' : ''}`

    return (
        <div className="search-box">
            <div className="search-box__input-wrapper">
                <input type="text" className={inputFieldClasses} placeholder={placeholder} ref={searchInputRef} onKeyUp={handleOnKeyUp}/>
                <button className="search-box-input-button" onClick={handleSearch}>
                    <SearchBoxIcon/>
                </button>
            </div>
            <div className={microcopyClasses}>Whoops, can't be empty...</div>
        </div>
    )
}

export default SearchBox;