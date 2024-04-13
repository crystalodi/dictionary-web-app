import { useState } from 'react';
import { ReactComponent as IconArrowDown } from '../../../assets/icons/icon-arrow-down.svg';
import { FontOption, FontSelectProps } from './FontSelect.props';
import './FontSelect.scss';

const fontSelectOptions: FontOption[] = [
    {
        value: '1',
        text: 'Sans Serif',
        dataValue: 'sans-serif'
    },
    {
        value: '2',
        text: 'Serif',
        dataValue: 'serif'
    },
    {
        value: '3',
        text: 'Mono',
        dataValue: 'mono'
    }
];

const FontSelect = (props: FontSelectProps) => {
    const { value = '1' } = props;
    const [selectedValue, setSelectedValue] = useState(value);
    const [isExpanded, setIsExpanded] = useState(false);

    const fontSelectValue = fontSelectOptions.find(option => option.value === selectedValue);
    const labelClasses = `font-select__button-selected-option font-select__button-selected-option--${fontSelectValue?.dataValue}`;

    const toggleCombobox = () => {
        setIsExpanded(previousState => !previousState);
    }

    const selectOption = (e: React.MouseEvent<HTMLLIElement>) => {
        const selectedOptionValue = e.currentTarget.value.toString();
        if (selectedOptionValue !== selectedValue) {
            setSelectedValue(e.currentTarget.value.toString());
        }
        toggleCombobox();
    }

    const handleOptionOnKeyUp = (e: any) => {
        console.log(e);
    }

    const renderFontSelectOption = (option: FontOption) => {
        const { text, dataValue, value } = option;
        const listItemKey = `option-${dataValue}`
        const listItemClasses = `font-select__dropdown-option font-select__dropdown-option--${dataValue}`;
    
        return (
            <li 
            key={listItemKey} 
            className={listItemClasses} 
            role="option" 
            aria-selected={value === fontSelectValue?.value} 
            value={value} 
            data-value={dataValue} 
            onClick={selectOption} 
            onKeyUp={handleOptionOnKeyUp}
            tabIndex={0}
            >
                {text}
            </li>
        )
    }

    const listBoxClassNames = `font-select__dropdown${isExpanded ? ' font-select__dropdown--expanded' : ''}`

    return (
        <div className="font-select">
            <button className="font-select__button" aria-label='select font style' role='combobox' aria-controls='font-select-options' aria-expanded={isExpanded} onClick={toggleCombobox} tabIndex={0}>
                <div className={labelClasses}>{fontSelectValue?.text}</div>
                <div className="font-select__button-arrow-down-icon"><IconArrowDown/></div>
            </button>
            <ul className={listBoxClassNames} role='listbox' tabIndex={-1} id="font-select-options">
                {fontSelectOptions.map(option => renderFontSelectOption(option))}
            </ul>
        </div>
    )
}

export default FontSelect;