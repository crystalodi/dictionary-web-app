import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg';
import './Header.scss';
const Header = () => {
    return (
        <header className='header'>
            <div className="header__content">
                <div className='header__content-logo'>
                    <LogoIcon/>
                </div>
            </div>
        </header>
    );
}

export default Header;