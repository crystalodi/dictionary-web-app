import { DictionaryDefinition } from "../../../utils/getDefinition.types";
import './Meaning.scss';
type MeaningProps = DictionaryDefinition["meanings"][0];

const Meaning = (props: MeaningProps) => {
    const { synonyms, antonyms, definitions, partOfSpeech } = props;
    console.log('synonyms', synonyms);
    console.log('antonyms', antonyms);
    return (
        <div className="meaning">
            <div className="meaning__heading">
                <p className="meaning__heading-part-of-speech">{partOfSpeech}</p>
                <hr className="meaning__divider"/>
            </div>
            <div className="meaning__definitions">
                <p className="meaning__definitions-heading">Meaning</p>
                <ul className="meaning__definitions__list">
                    {definitions.map((meaning, index) => <li key={'meaningListItem' + index + new Date().getTime()} className="meaning__definitions__list-item">{meaning.definition}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Meaning;