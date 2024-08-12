import {useState} from 'react';

function Form (props) {
    const [formData, setFormData] = useState({
        searchterm: '',
        // bonus: ''
    })

    const handleChange = (event) => {
        console.log('in handleChange');
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(formData);
        props.moviesearch(formData.searchterm);
    }
    
    // This is an example of an additional input field,
    // pay attention to the fields that are the same across inputs
    // and how these labels need to match your formData state fields
//     <input 
//     type='text'
//     name='bonus'
//     onChange={handleChange}
//     value={formData.bonus}
// />
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