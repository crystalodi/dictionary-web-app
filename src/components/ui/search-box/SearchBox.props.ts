export type SearchBoxProps = {
    validationError?: boolean;
    handleButtonClick: () => void;
} & React.ComponentPropsWithoutRef<'input'>;

