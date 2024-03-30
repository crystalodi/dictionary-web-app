import { NotFoundProps } from './NotFound.props';
import './NotFound.scss';

const NotFound = (props: NotFoundProps) => {
    return (
        <div className="not-found">
            <div className="not-found-emoji">&#128533;</div>
            <h4 className="not-found-title">{props.title}</h4>
            <p className="not-found-message">
                {props.message} {props.resolution}
            </p>
        </div>
    )
}

export default NotFound;