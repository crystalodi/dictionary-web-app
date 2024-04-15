import { SearchBoxProps } from "./SearchBox.props"
import { SearchBoxIcon } from "../../../assets/icons";
import "./SearchBox.scss";
import { forwardRef } from "react";

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>((props, ref) => {
    const {
        handleButtonClick,
        validationError,
        placeholder,
        disabled,
        ...restProps
    } = props;

    const inputFieldClasses = `search-box-input${validationError ? ' search-box-input--error' : ''}`

    const microcopyClasses = `search-box__microcopy${validationError ? ' search-box__microcopy--error' : ''}`

    return (
        <div className="search-box">
            <div className="search-box__input-wrapper">
                <input type="text" className={inputFieldClasses} placeholder={placeholder} disabled={disabled} ref={ref} {...restProps}/>
                <button className="search-box-input-button" onClick={handleButtonClick} disabled={disabled} aria-label='Search'>
                    <SearchBoxIcon/>
                </button>
            </div>
            {validationError && <div className={microcopyClasses}>Whoops, can't be empty...</div>}
        </div>
    )
})

export default SearchBox;