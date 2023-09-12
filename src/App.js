
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){

    const [books,setBooks] = useState([]);

    const createBook =  (title)=>{
        console.log('need to add a book with title : ',title);
        setBooks([...books,{id: Math.round(Math.random()*10000000) , title:title }]);
    };
    const deleteBookById = (id )=>{
        console.log('in deleteBookById function (app component) ');
        const updatedBooks = books.filter((book) => {
            return id !== book.id;
          });
        setBooks(updatedBooks);
    };
    const editBookById = (id,newTitle)=>{
        console.log('in editBookById function (in app component)');
        const updatedBooks= books.map((book)=>{
            if (book.id === id) {
                return { ...book, title: newTitle };
              }
          
              return book;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='app' >
            <h1>Reading List</h1>
            <BookList books={books}  onDelete={deleteBookById} onEdit={editBookById}  />
            <BookCreate onBookCreateSubmit={createBook} />
        </div>
    );
}

export default App; 