import { DictionaryDefinition } from "../../../utils/getDefinition.types";
import Divider from "../../ui/divider";
import './Meaning.scss';
type MeaningProps = DictionaryDefinition["meanings"][0];
type Definition = Omit<MeaningProps["definitions"][0], 'synonyms' | 'antonyms'> & { index: number };
type OtherTerms = {
    list: string[];
    label: 'Antonyms' | 'Synonyms'
}

const Meaning = (props: MeaningProps) => {
    const { synonyms, antonyms, definitions, partOfSpeech } = props;
    const showSynonymsAntonyms = !!synonyms.length || !!antonyms.length;

    const renderDefinitionItem = (meaning: Definition) => {
        const { definition, index, example } = meaning;
        return (
            <li key={'meaningListItem' + index + new Date().getTime()} className="meaning__definitions__list__item">
                <div className="meaning__definitions__list__item-definition">
                    {definition}
                </div>
                {example && <p className="meaning__definitions__list__item-example">
                    <q>{example}</q>
                </p>}
            </li>
        )
    }

    const renderOtherTerms = (otherTerms: OtherTerms) => {
        const { list, label } = otherTerms;
        return (
            <div className="meaning__other__terms">
                <div className="meaning__other__terms-label">
                    {label}
                </div>
                <div className="meaning__other__terms__list" role="list">
                    {list.map((item, index) => <div className="meaning__other__terms__list-item" role="listitem" key={label + index + new Date().getTime()}>
                        {item}
                    </div>)}
                </div>
            </div>
        );
    }

    return (
        <div className="meaning">
            <div className="meaning__heading">
                <div className="meaning__heading-part-of-speech">{partOfSpeech}</div>
                <Divider/>
            </div>
            <div className="meaning__definitions">
                <div className="meaning__definitions-heading">Meaning</div>
                <ul className="meaning__definitions__list">
                    {definitions.map((meaning, index) => renderDefinitionItem({
                        definition: meaning.definition,
                        example: meaning.example,
                        index
                    }))}
                </ul>
            </div>
            {showSynonymsAntonyms && <div className="meaning__other">
                {!!synonyms.length && renderOtherTerms({label: 'Synonyms', list: synonyms})}
                {!!antonyms.length && renderOtherTerms({label: 'Antonyms', list: antonyms})}
            </div>}
        </div>
    )
}

export default Meaning;