import { useState } from 'react';

function BookCreate( { onBookCreateSubmit } ){

    const [term,setTerm] = useState('');

    const handleChange = (event)=>{
        setTerm(event.target.value);
    };
    const handleBookCreateFormSubmit= (event)=>{
        event.preventDefault();
        onBookCreateSubmit(term);
        setTerm('');
    };


    return (
        <div className='book-create' >
            <form onSubmit={handleBookCreateFormSubmit} >
                <label>Enter Title</label>
                <input className='input' value={term} onChange={handleChange}  />
                <button className='button' >Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;