import { DefinitionNotFound as NotFoundProps } from '../../../utils/getDefinition.types';
import './NotFound.scss';

const NotFound = (props: NotFoundProps) => {
    return (
        <div className="not-found">
            <div className="not-found-emoji">&#128533;</div>
            <div className="not-found-title" role="heading" aria-level={1}>{props.title}</div>
            <p className="not-found-message">
                {props.message} {props.resolution}
            </p>
        </div>
    )
}

export default NotFound;