import { DictionaryDefinition } from '../../../utils/getDefinition.types'
import Divider from '../../ui/divider';
import PlayButton from '../../ui/play-button';
import Meaning from '../meaning';
import { NewWindowIcon } from '../../../assets/icons';
import './Definition.scss';

type DefinitionProps = Omit<DictionaryDefinition, 'license'> & { index: number, total: number, handleTermSearch: (searchTerm: string) => Promise<void> }

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
                {meanings.map((meaning, index) => <Meaning {...meaning} key={word + index + new Date().getTime() + '_meaning'} handleTermSearch={restProps.handleTermSearch}/>)}
            </div>
            {index === total-1 && <>
                <Divider/>
                <div className='definition__source'>
                    <div className='definition__source__link'>
                        <div className='definition__source__link-label'>
                            Source
                        </div>
                        <a href={sourceUrls[0]} target="_blank" rel='noreferrer'>
                            {decodeURI(sourceUrls[0])}
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