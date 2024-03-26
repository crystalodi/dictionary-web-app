import { LayoutComponentProps } from '../LayoutComponent.props';
import './Container.scss';

export const Container = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <div className="container">
            {children}
        </div>
    )
}