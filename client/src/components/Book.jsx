import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


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

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/api/books/${id}`);
            setBooks(books.filter(book => book._id !== id)); 
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };






    return (
        <div>
            <h1>Book list</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="col-md-6">
                            <h1>View books</h1>
                            <Link to="/addbooks"><button type="submit" className='btn primary'>View Book</button></Link>


                        </div>
                        
                        <div className="col-md-6">
                            <h2>List of Books</h2>
                            <ul>
                                {books.map(book => (
                                    <li key={book._id}>
                                        <h2>{book.title}</h2>
                                        <p>Author: {book.author}</p>
                                        <p>Genre: {book.genre}</p>
                                        <p>Publication Year: {book.publicationYear}</p>
                                        <p>Description: {book.description}</p>
                                        <button onClick={() => handleDelete(book._id)}>Delete</button>
                                        <Link to="/updatebook">update</Link>
                                    </li>
                                ))}

                              
                            </ul>

                        </div>
                       
                    </div>
                </div>
            </div>



        </div>
    );




}

export default Book


