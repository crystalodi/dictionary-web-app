import { SearchInputComponentProps } from "./SearchInput.props"
import { ReactComponent as SearchBoxIcon } from "../../../assets/icons/icon-search.svg";
import "./SearchInput.scss";
import { useRef } from "react";

export const SearchInput = (props: SearchInputComponentProps) => {
    const {
        handleDictionarySearch,
        error
    } = props;

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if (typeof handleDictionarySearch === 'function') {
            handleDictionarySearch(searchInputRef.current?.value);
        }
    }

    const inputFieldClasses = `search-box-input ${error ? 'search-box-input--error' : ''}`

    const microcopyClasses = `search-box__microcopy ${error ? 'search-box__microcopy--error' : ''}`

    return (
        <div className="search-box">
            <div className="search-box__input-wrapper">
                <input type="text" className={inputFieldClasses} placeholder="Search for any word..." ref={searchInputRef}/>
                <span role="button" tabIndex={0} className="search-box-input-button" onClick={handleSearch}>
                    <SearchBoxIcon/>
                </span>
            </div>
            <div className={microcopyClasses}>Whoops, can't be empty...</div>
        </div>
    )
}