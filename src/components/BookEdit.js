
import { useState } from 'react';

function BookEdit( { onEditSubmit , book , onEdit  } ){

    const [title,setTitle]= useState(book.title);

    const handleEditFormSubmit= (event)=>{
        event.preventDefault();
        onEditSubmit();
        onEdit(book.id,title);
    };
    const handleInputChange=  (event)=>{
        setTitle(event.target.value);
    };

    return (
        <div>
            <form className='book-edit' onSubmit={handleEditFormSubmit} >
                <label>Title</label>
                <input value={title} onChange={handleInputChange} ></input>
                <button className='button-is-primary' >Save</button>
            </form>
        </div>
    );
}

export default BookEdit;