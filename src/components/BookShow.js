
import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow( { book, onDelete ,onEdit } ){

    const [showEdit,setShowEdit] = useState(false);
    
    
    const handleDeleteClick= ()=>{
        console.log('delete button is clicked');
        onDelete(book.id);
    };
    const handleEditClick= ()=>{
        console.log('edit button is clicked');
        setShowEdit(!showEdit);
    };
    const onEditFormSubmit=() =>{
        setShowEdit(!showEdit);
    };

    let content= <h3>{book.title}</h3>;
    if( showEdit===true ){
        content=<BookEdit onEditSubmit={onEditFormSubmit} book={book} onEdit={onEdit} />
    }


    return (
        <div className='book-show'  >
            {content}
            <img 
            alt = 'books'
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div className='actions' >
            <button className='edit' onClick={handleEditClick} >Edit</button>
            <button className='delete' onClick={handleDeleteClick} >Delete</button>
            </div>
        </div>
    );
}

export default BookShow;