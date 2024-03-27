import { LayoutComponentProps } from "../LayoutComponent.props"

const Header = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <header>
            {children}
        </header>
    );
}

export default Header;