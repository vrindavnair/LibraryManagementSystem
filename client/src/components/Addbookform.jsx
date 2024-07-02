import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Addbookform = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [description, setDescription] = useState('');
  
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            genre,
            publicationYear,
            description
        };

        try {
            const response = await axios.post('http://localhost:9000/api/books', newBook);
            onBookAdded(response.data);
            setTitle('');
            setAuthor('');
            setGenre('');
            setPublicationYear('');
            setDescription('');
           
        } catch (error) {
            setError(error.response.data.message);
        }
    };
  return (
    <div>
        <h1>ADD BOOKS</h1>
        <form onSubmit={handleSubmit}>
            <h2>Add a New Book</h2>
           
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 
                />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                
                />
            </div>
            <div>
                <label>Genre:</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                   
                />
            </div>
            <div>
                <label>Publication Year:</label>
                <input
                    type="number"
                    value={publicationYear}
                    onChange={(e) => setPublicationYear(e.target.value)}
                   
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    
                ></textarea>
            </div>
            <button type="submit" className='btn primary'>Add Book</button>


        </form>
        <Link to="/addbooks"><button type="submit" className='btn primary'>View Book</button></Link>

    </div>

  )
}

export default Addbookform



