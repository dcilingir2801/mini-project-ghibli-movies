import React from 'react';
import MovieList from '../components/MovieList';
import { Link } from "react-router-dom"

function HomePage() {

    const scrollToMovies = () => {
        const movieContainer = document.getElementById('movie-container');
        movieContainer.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='homepage'>
            <div className='homepage-intro'>
                <p>Ever heard of Studio Ghibli? <br/> <br /> 
                This Japanese animation powerhouse, founded in 1985 by visionaries Hayao Miyazaki, 
                Isao Takahata, and producer Toshio Suzuki, is celebrated for its enchanting storytelling,
                breathtaking visuals, and deep emotional impact. <br/><br/>
                Ready to experience the magic yourself? Dive into the captivating world of Studio Ghibli
                films right here. From the heartwarming adventures of "My Neighbor Totoro"
                to the spellbinding journey of "Spirited Away" there's a Ghibli masterpiece for everyone.  <br /> <br />
                So, have you explored the wonder of Ghibli yet? If not, what are you waiting for?<br /><br /><br />
                <Link to="/about"><button>Learn more about Studio Ghibli</button></Link><br />
                <button onClick={scrollToMovies}>Explore all movies &#9660;</button></p>
            </div>
            <div id='movie-container' className='movie-container'>
                {/*<h1>Explore all movies</h1>*/}
                <MovieList />
            </div>
        </div>
    )
}

export default HomePage;
