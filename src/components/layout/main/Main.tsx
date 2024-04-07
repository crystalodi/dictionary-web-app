import './Main.scss';
import { LayoutComponentProps } from "../LayoutComponent.props";

const Main = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <main className="main__content">
            {children}
        </main>
    )
}

export default Main;