import './DefinitionList.scss';
import { DictionaryDefinition } from "../../../../utils/getDefinition.types";
type Definitions = Pick<DictionaryDefinition["meanings"][0], 'definitions'> 
type DefinitionItem = Pick<DictionaryDefinition["meanings"][0]['definitions'][0], 'definition' | 'example'>

const DefinitionList = ({definitions}: Definitions) => {

    const renderDefinitionItem = ({definition, example, index}: DefinitionItem & {index: number}) => {
        return (
            <li key={'definition-item' + index + new Date().getTime()} className="definition-list__list__item">
                <div className="definition-list__list__item-definition">
                    {definition}
                </div>
                {example && <p className="definition-list__list__item-example">
                    <q>{example}</q>
                </p>}
            </li>
        )
    }

    return (
        <div className="definition-list">
            <div className="definition-list-heading">Meaning</div>
            <ul className="definition-list__list">
                {definitions.map((meaning: DefinitionItem, index: number) => renderDefinitionItem({
                    example: meaning.example,
                    index,
                    definition: meaning.definition
                }))}
            </ul>
        </div>
    )
};

export default DefinitionList;