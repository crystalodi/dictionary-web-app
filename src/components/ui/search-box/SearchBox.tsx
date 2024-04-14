import { SearchBoxProps } from "./SearchBox.props"
import { SearchBoxIcon } from "../../../assets/icons";
import "./SearchBox.scss";
import { useRef } from "react";

const SearchBox = (props: SearchBoxProps) => {
    const {
        handleDictionarySearch,
        validationError,
        placeholder,
        disabled
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

    const inputFieldClasses = `search-box-input${validationError ? ' search-box-input--error' : ''}`

    const microcopyClasses = `search-box__microcopy${validationError ? ' search-box__microcopy--error' : ''}`

    return (
        <div className="search-box">
            <div className="search-box__input-wrapper">
                <input type="text" className={inputFieldClasses} placeholder={placeholder} ref={searchInputRef} onKeyUp={handleOnKeyUp} disabled={disabled}/>
                <button className="search-box-input-button" onClick={handleSearch} disabled={disabled} aria-label='Search'>
                    <SearchBoxIcon/>
                </button>
            </div>
            {validationError && <div className={microcopyClasses}>Whoops, can't be empty...</div>}
        </div>
    )
}

export default SearchBox;