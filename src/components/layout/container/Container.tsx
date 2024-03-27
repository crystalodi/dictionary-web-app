import { LayoutComponentProps } from '../LayoutComponent.props';
import './Container.scss';

const Container = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;