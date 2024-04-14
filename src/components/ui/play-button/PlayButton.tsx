import { useRef } from 'react';
import { PlayButtonIcon } from '../../../assets/icons';
import './PlayButton.scss';
import { DictionaryDefinition } from '../../../utils/getDefinition.types';

type Phonetic = DictionaryDefinition["phonetics"][0] & React.ComponentPropsWithoutRef<'button'>;
const PlayButton = ({audio, ...restProps}: Pick<Phonetic, 'audio' | 'aria-label'>) => {
    const audioElement = useRef<HTMLAudioElement>(null);
    const handlePlayButtonClick = () => audioElement.current && audioElement.current?.play();

    return (
        <>
            <audio ref={audioElement} preload='auto'>
                <source src={audio} type="audio/mpeg"/>
            </audio>
            <button className='play-button' onClick={handlePlayButtonClick} {...restProps}>
                <PlayButtonIcon/>
            </button>
        </>
    )
}

export default PlayButton;