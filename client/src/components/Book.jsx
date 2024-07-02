import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Book = () => {
    const [books, setBooks] = useState([]);
   

    useEffect(() => {
        axios.get('http://localhost:9000/api/books')
            .then(response => {
                setBooks(response.data);
              
            })
            .catch(error => {
                setError(error.message);
             
            });
    }, []);

    


  return (
    <div>
        <h1>Book list</h1>
         <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Publication Year: {book.publicationYear}</p>
                        <p>Description: {book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );


 
  
}

export default Book


