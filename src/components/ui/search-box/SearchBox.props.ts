export type SearchBoxProps = {
    handleDictionarySearch: (searchTerm: string) => void;
    validationError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

