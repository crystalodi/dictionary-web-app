import {DictionaryDefinition as DefinitionProps} from '../../../utils/getDefinition.types'
import PlayButton from '../../ui/play-button';
import Meaning from '../meaning';
import './Definition.scss';

type PickType = 'word' | 'phonetics' | 'phonetic' | 'meanings';

const Definition = ({ word, phonetics, phonetic, meanings }: Pick<DefinitionProps, PickType> ) => {
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
            <div className='definition__meanings'>
                {meanings.map((meaning, index) => <Meaning {...meaning} key={word + index + new Date().getTime() + '_meaning'}/>)}
            </div>
        </div>
    )
}

export default Definition;