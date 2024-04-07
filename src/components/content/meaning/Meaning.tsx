import { DictionaryDefinition } from "../../../utils/getDefinition.types";
import Divider from "../../ui/divider";
import './Meaning.scss';
type MeaningProps = DictionaryDefinition["meanings"][0];
type Definition = Omit<MeaningProps["definitions"][0], 'synonyms' | 'antonyms'> & { index: number };

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
                {!!synonyms.length && <div className="meaning__other__terms">
                    <div className="meaning__other__terms-heading">
                        Synonyms
                    </div>
                    <div className="meaning__other__terms__list" role="list">
                        {synonyms.map((synonym, index) => 
                        <div className="meaning__other__terms__list-item" key={synonym + index + new Date().getTime()} role="listitem">
                            {synonym}
                        </div>)}
                    </div>
                </div>}
                {!!antonyms.length && <div className="meaning__other__terms">
                    <div className="meaning__other__terms-heading">
                        Antonyms
                    </div>
                    <div className="meaning__other__terms__list" role="list">
                        {antonyms.map((antonym, index) => 
                        <div className="meaning__other__terms__list-item" key={antonym + index + new Date().getTime()} role="listitem">
                            {antonym}
                        </div>)}
                    </div>
                </div>}
            </div>}
        </div>
    )
}

export default Meaning;