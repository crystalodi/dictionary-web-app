import { DictionaryDefinition } from '../../../utils/getDefinition.types'
import Divider from '../../ui/divider';
import PlayButton from '../../ui/play-button';
import Meaning from '../meaning';
import { NewWindowIcon } from '../../../assets/icons';
import './Definition.scss';

type DefinitionProps = Omit<DictionaryDefinition, 'license'> & { index: number, total: number }

const Definition = (props: DefinitionProps) => {
    const {
        phonetics,
        phonetic,
        word,
        meanings,
        ...restProps
    } = props;
    const audio = phonetics.find(phonetic => phonetic.audio)?.audio ?? "";
    const playButtonAriaLabel = audio && `Play sound ${word}`;
    const { sourceUrls, index, total } = restProps;
    const sourceUrl = sourceUrls.find(url => url.includes(word))

    return (
        <div className='definition'>
            <div className='definition__header'>
                <div className='definition__header__term'>
                    <h1 className='definition__header__term-word'>{word}</h1>
                    {phonetic && <p className='definition__header__term-phonetic'>
                        {phonetic}
                    </p>}
                </div>
                {audio && <div className='definition__header-audio'>
                    <PlayButton audio={audio} aria-label={playButtonAriaLabel}/>
                </div>}
            </div>
            <div className='definition__meanings'>
                {meanings.map((meaning, index) => <Meaning {...meaning} key={word + index + new Date().getTime() + '_meaning'}/>)}
            </div>
            {index === total-1 && <>
                <Divider/>
                <div className='definition__source'>
                    <div className='definition__source__link'>
                        <div className='definition__source__link-label'>
                            Source
                        </div>
                        <a href={sourceUrl} target="_blank" rel='noreferrer'>
                            {sourceUrl}
                        </a>
                        <div className='definition__source__link-icon'>
                            <NewWindowIcon title='open link in new window'/>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Definition;