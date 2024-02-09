import MovieList from '../components/MovieList';

function HomePage() {
    return(
        <div className='homepage'>
        <img src="/src/assets/n2t2137ysxq71.jpeg" />
            <div className='movie-container'>
                <h1>Explore all movies</h1>
                <MovieList />
            </div>
        </div>
    )
}

export default HomePage;
