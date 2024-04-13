export type FontTypeDisplayText = 'Sans Serif' | 'Serif' | 'Mono';
type FontTypeDataValue = 'sans-serif' | 'serif' | 'mono';

export type FontOption = {
    value: string;
    text: FontTypeDisplayText;
    dataValue: FontTypeDataValue;
}

export type FontSelectProps = {

} & React.ComponentPropsWithoutRef<'select'>;