import { useRef } from 'react';
import {ReactComponent as PlayButtonIcon } from '../../../assets/icons/icon-play.svg';
import './PlayButton.scss';
import { Phonetics } from '../../../utils/getDefinition.types';

const PlayButton = ({audio}: Pick<Phonetics, 'audio'>) => {
    const audioElement = useRef<HTMLAudioElement>(null);
    const handlePlayButtonClick = () => audioElement.current && audioElement.current?.play();

    console.log(audio);

    return (
        <>
            <audio ref={audioElement}>
                <source src={audio} type="audio/mpeg"/>
            </audio>
            <button className='play-button' onClick={handlePlayButtonClick}>
                <PlayButtonIcon/>
            </button>
        </>
    )
}

export default PlayButton;