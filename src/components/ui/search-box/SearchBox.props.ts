interface SearchBoxProps extends React.ComponentPropsWithoutRef<'input'> {
    handleDictionarySearch: (searchTerm?: string) => void;
    validationError?: boolean;
}

export type SearchBoxComponentProps = SearchBoxProps;

