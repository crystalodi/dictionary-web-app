import { LogoIcon, MoonIcon } from '../../../assets/icons';
import FontSelect from '../../ui/font-select';
import ThemeSwitch from '../../ui/theme-switch';
import './Header.scss';
const Header = () => {
    return (
        <header className='header'>
            <div className="header__content">
                <div className='header__content-logo'>
                    <LogoIcon width={32} height={36.5} title='Frontend Mentor Dictionary App'/>
                </div>
                <div className='header__content__controls'>
                    <FontSelect value='2'/>
                    <div className='header-divider'></div>
                    <div className='header__content__controls__theme'>
                        <ThemeSwitch/>
                        <MoonIcon/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;