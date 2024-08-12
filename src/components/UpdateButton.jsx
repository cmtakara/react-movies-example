function UpdateButton (props) {
    // in order to actually run the useEffect which is in the parent component
    // i need to change a piece of state for my parent component in here
    // i also need to ensure that the state that I'm changing is
    // in the dependency array for useEffect

    const runUseEffect = (evt) => {
        evt.preventDefault();
        console.log(props);
        props.setUpdateMovie(props.updateMovie + 1);
    }

    return (
        <div>
            <form onSubmit={runUseEffect}>
                <input type='submit' value='I run useEffect' />
            </form>
        </div>
    )
}

export default UpdateButton;