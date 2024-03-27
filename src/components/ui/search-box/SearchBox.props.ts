interface SearchBoxProps extends React.ComponentPropsWithoutRef<'input'> {
    handleDictionarySearch: (searchTerm?: string) => void;
    error?: boolean;
}

export type SearchBoxComponentProps = SearchBoxProps;

