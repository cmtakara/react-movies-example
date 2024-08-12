import {useState} from 'react';

function Form (props) {
    const [formData, setFormData] = useState({
        searchterm: ''
    })

    const handleChange = (event) => {
        console.log('in handleChange');
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.moviesearch(formData.searchterm);
    }
    
    return (
        <div onSubmit={handleSubmit}>
            <form>
                <input 
                    type='text'
                    name='searchterm'
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value='submit'/>
            </form>
            <p>type in the movie title to search for</p>
        </div>
    )
}

export default Form;