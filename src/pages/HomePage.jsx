import MovieList from '../components/MovieList';

function HomePage() {
    return(
        <div className='homepage'>
            <div className='movie-container'>
                <h1>Explore all movies</h1>
                <MovieList />
            </div>
        </div>
    )
}

export default HomePage;
