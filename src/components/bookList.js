import "../styles/bookList.css";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookList = () => {
    let location = useLocation()
    let [books,setBooks] = useState([])
    useEffect(()=>{
        let fetchBooks = async() =>{
            let response = await fetch("http://localhost:4000/books")
            let data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    },[]);

    

    let handleDelete = (id) =>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(books)
        });
        window.location.reload() //reloads the page
    }

    

    return ( 
        <div className="booklist">
            <h1>Book List</h1>
            <div className="books">
                { books.map((data)=>{
                    return(
                        <div className="list">
                        <h4>Title:{data.title}</h4>
                        <h4>Author:{data.author}</h4>
                        <h4>Rating:{data.rating}</h4>
                        <h4>Genre:{data.genre}</h4>
                        {location.pathname==='/admin-portal/book-list'  && <button onClick={()=>handleDelete(data.id)}>Delete</button>}
                        </div>
                        
                        
                    )
                    })};
                    
            </div>

        </div>
     );
}
 
export default BookList;