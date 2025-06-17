import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
                error page
                <Link className="btn btn-success" to={"/"}>go back</Link>
        </div>
    );
};

export default ErrorPage;