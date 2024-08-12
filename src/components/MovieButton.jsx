function MovieButton (props) {
    // const newMovie = 'Frozen';

    const getNewMovie = (evt) => {
        evt.preventDefault();
        props.moviesearch(props.newMovie);
    }

    return (
        <form onSubmit={getNewMovie}>
            <input type='submit' value={props.newMovie}/>
        </form>
    )
}

export default MovieButton;