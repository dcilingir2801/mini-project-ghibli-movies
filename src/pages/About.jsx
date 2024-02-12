import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h2>About Studio Ghibli</h2>
            <Link to="/">
            <button type="button" className="back-button">Back</button>
            </Link>
        </div>
    )
}

export default About;