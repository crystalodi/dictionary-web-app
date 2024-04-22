import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon } from '../../../assets/icons';
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
    const listBoxRef = useRef<HTMLUListElement>(null);

    const { value = '3' } = props;
    const [selectedValue, setSelectedValue] = useState(value);
    const [isExpanded, setIsExpanded] = useState(false);

    const fontSelectValue = fontSelectOptions.find(option => option.value === selectedValue) as FontOption;
    const labelClasses = `font-select__button-selected-option font-select__button-selected-option--${fontSelectValue?.dataValue}`;

    useEffect(() => {
        document.body.setAttribute('data-font-style', fontSelectValue.dataValue);
    }, [fontSelectValue])


    const toggleCombobox = () => {
        setIsExpanded(previousState => !previousState);
    }

    const blurCombobox = (e: React.FocusEvent<HTMLButtonElement>) => {
        if (listBoxRef?.current?.contains(e.relatedTarget)) {
            return;
        }

        if (isExpanded) {
           toggleCombobox();
        }
    }

    const selectOption = (e: React.MouseEvent<HTMLLIElement>) => {
        const selectedOptionValue = e.currentTarget.value.toString();
        if (selectedOptionValue !== selectedValue) {
            setSelectedValue(selectedOptionValue);
        }
        toggleCombobox();
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
            >
                {text}
            </li>
        )
    }

    const listBoxClassNames = `font-select__dropdown${isExpanded ? ' font-select__dropdown--expanded' : ''}`

    return (
        <div className="font-select">
            <span className='font-select__accessible-text' id='font-select-label'>select font style</span>
            <button className="font-select__button" aria-label='select font style' role='combobox' aria-controls='font-select-options' aria-expanded={isExpanded} onClick={toggleCombobox} tabIndex={0} onBlur={blurCombobox} aria-labelledby='font-select-label'>
                <div className={labelClasses}>{fontSelectValue?.text}</div>
                <div className="font-select__button-arrow-down-icon"><ArrowDownIcon title='toggle font styles'/></div>
            </button>
            <ul className={listBoxClassNames} role='listbox' tabIndex={-1} id="font-select-options" ref={listBoxRef} aria-label='font styles'>
                {fontSelectOptions.map(option => renderFontSelectOption(option))}
            </ul>
        </div>
    )
}

export default FontSelect;