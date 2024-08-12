function MovieDisplay ( {movie} ) {
    // we are using {movie} instead of props so that we can access it 
    // by just using movie, instead of props.movie

    // in order to both have my code be cleaner and to 
    // ensure that we don't try to render with null values
    // I am going to add two functions
    // loaded() and loading()

    const loaded = () => {
        return (
            <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title}/>
            <h2>{movie.Year}</h2>
            <h3>Ratings</h3>
            {
                movie.Ratings.map (rating => {
                    return(
                        <>
                        <h4>{rating.Source}</h4>
                        <h4>{rating.Value}</h4>
                        </>
                    )
                })
            }
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return (movie ? loaded() : loading())
}

export default MovieDisplay;