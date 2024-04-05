import { useRef } from 'react';
import {ReactComponent as PlayButtonIcon } from '../../../assets/icons/icon-play.svg';
import './PlayButton.scss';
import { DictionaryDefinition } from '../../../utils/getDefinition.types';

type Phonetic = DictionaryDefinition["phonetics"][0];
const PlayButton = ({audio}: Pick<Phonetic, 'audio'>) => {
    const audioElement = useRef<HTMLAudioElement>(null);
    const handlePlayButtonClick = () => audioElement.current && audioElement.current?.play();

    return (
        <>
            <audio ref={audioElement} preload='auto'>
                <source src={audio} type="audio/mpeg"/>
            </audio>
            <button className='play-button' onClick={handlePlayButtonClick}>
                <PlayButtonIcon/>
            </button>
        </>
    )
}

export default PlayButton;