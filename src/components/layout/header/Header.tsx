import { LogoIcon } from '../../../assets/icons';
import FontSelect from '../../ui/font-select';
import './Header.scss';
const Header = () => {
    return (
        <header className='header'>
            <div className="header__content">
                <div className='header__content-logo'>
                    <LogoIcon width={32} height={36.5} title='Frontend Mentor Dictionary App'/>
                </div>
                <div className='header__content__controls'>
                    <div className='header__content-controls__font-select'>
                        <FontSelect value='2'/>
                    </div>
                    <div className='header__content-controls__theme'>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;