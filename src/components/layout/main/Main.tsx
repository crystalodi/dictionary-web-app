import { LayoutComponentProps } from "../LayoutComponent.props";

const Main = (props: LayoutComponentProps) => {
    const { children } = props;
    return (
        <main>
            {children}
        </main>
    )
}

export default Main;