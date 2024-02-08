import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>ERROR 404: PAGE NOT FOUND</h2>
            <Link to="/">
            <button type="button" className="back-button">Back</button>
            </Link>
        </div>
    )
}

export default NotFound;