import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UpdateBook = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editBook, setEditBook] = useState({});
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/books');
            setBooks(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    

    


  return (
<>
<div>
            <h1>Book List</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <h1>View Books</h1>
                            <Link to="/addbooks"><button type="button" className="btn primary">Add Book</button></Link>
                        </div>

                     
                    </div>
                </div>
            </div>
        </div>

</>
   
  )
}

export default UpdateBook