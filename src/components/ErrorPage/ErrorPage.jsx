import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div>
            <h2>Oops!! Page Not Found Plese Enter Right Page</h2>
<p>{error.statusText || error.massage}</p>
{
    error.status=== 404 && <div>
        <h2>Page NOt Found</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to='/'><button>Go Back To Home</button></Link>
    </div>

}
        </div>
    );
};

export default ErrorPage;