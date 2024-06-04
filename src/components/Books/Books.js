import React from 'react'
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

const Books = () => {
    const data = JSON.parse(localStorage.getItem('books')) || [];
    const navigate = useNavigate();

    const handleDelete = () => {
        localStorage.removeItem('books');
        window.location.reload();
    }
    
    return (
    <div className='main-container'>
        <div className='my-books-container'>
        <h1>My Books</h1>
        <div className='buttons-container'>
        <button onClick={()=>navigate("/")}>Back to Home</button>
        <button onClick={()=>handleDelete()} className='delete-btn'>Delete All</button>
        </div>
        </div>
        {data.length>0 ? <div className='book-container'>
           {data && data.map((value)=>(
               <div className='book-card' key={value.key}>
                   <p><span style={{fontWeight: 'bold'}}>Book Title</span> : {value.title}</p>
                   <br/>
                   <p><span style={{fontWeight: 'bold'}}>Edition</span> : {value.edition}</p>
              </div>
           ))}
        </div>: 
        <div>
            <h3>No books added</h3>
        </div>}
    </div>
  )
}

export default Books