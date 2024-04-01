import {DictionaryDefinition as DefinitionProps} from '../../../utils/getDefinition.types'
import PlayButton from '../../ui/play-button';
import './Definition.scss';

const Definition = (props: DefinitionProps) => {
    const { word, phonetics, phonetic, meanings } = props;
    const audio = phonetics.find(phonetic => phonetic.audio)?.audio ?? "";
    return (
        <div className='definition'>
            <div className='definition__header'>
                <div className='definition__header__term'>
                    <h1 className='definition__header__term-word'>{word}</h1>
                    <p className='definition__header__term-phonetic'>
                        {phonetic}
                    </p>
                </div>
                {audio && <div className='definition__header-audio'>
                    <PlayButton audio={audio}/>
                </div>}
            </div>
            <div className='definition__meaning'>

            </div>
        </div>
    )
}

export default Definition;