import { useEffect, useState } from "react"
import './ThemeSwitch.scss';

const ThemeSwitch = (props: React.ComponentPropsWithoutRef<'input'>) => {
    
    const [isChecked, setIsChecked] = useState(props.checked);

    useEffect(() => {
        document.body.setAttribute('data-theme', isChecked ? 'dark' : 'light');
    }, [isChecked]);

    const toggleSwitch = () =>  setIsChecked((previousState) => !previousState);

    return (
        <label className="theme-switch">
            <input type="checkbox" checked={isChecked} onChange={toggleSwitch}/>
            <span className="theme-switch-slider"></span>
        </label>
    )
}

export default ThemeSwitch;