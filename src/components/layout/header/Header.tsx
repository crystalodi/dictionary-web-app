import { LayoutComponentProps } from "../LayoutComponent.props"

export const Header = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <header>
            {children}
        </header>
    );
}

export default Header;