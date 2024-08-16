import { DictionaryDefinition } from "../../../utils/getDefinition.types";
import Divider from "../../ui/divider";
import './Meaning.scss';
import DefinitionList from "./definition-list";
import OtherTerms from "./other-terms"
type MeaningProps = DictionaryDefinition["meanings"][0] & { handleTermSearch: (searchTerm: string) => Promise<void> };

const Meaning = (props: MeaningProps) => {
    const { synonyms, antonyms, definitions, partOfSpeech, handleTermSearch } = props;
    const showSynonymsAntonyms = !!synonyms.length || !!antonyms.length;

    return (
        <div className="meaning">
            <div className="meaning__heading">
                <div className="meaning__heading-part-of-speech">{partOfSpeech}</div>
                <Divider/>
            </div>
            <div className="meaning__definitions">
                <DefinitionList definitions={definitions}/>
            </div>
            {showSynonymsAntonyms && <div className="meaning__other">
                <OtherTerms antonyms={antonyms} synonyms={synonyms} handleTermSearch={handleTermSearch}/>
            </div>}
        </div>
    )
}

export default Meaning;