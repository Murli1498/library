import '../styles/addBooks.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const AddBooks = () => {
    let[title ,settitle]=useState('')
    let[author ,setauthor]=useState('')
   let[rating ,setrating]=useState('')
   let[genre ,setgenre]=useState('')    
   

   const navigate = useNavigate();

   let handleSubmit = (e) =>{
    e.preventDefault()
    let addbooks={
        title:title
        ,author:author
        ,rating:rating
        ,genre:genre
    }
    fetch(" http://localhost:4000/books",{
            method:"POST",
            headers:{"content-type":"application/json;charset=utf-8"}
            ,body:JSON.stringify(addbooks)
        });
        alert("added to Book List")
        navigate("/admin-portal/book-list")
    };

   
    return ( 
        <div className="addbooks">
            <div className="image"></div>
             <div className="row">
            <form action="" id="add" onSubmit={handleSubmit}>
                <label htmlFor="title"> <h1>Title</h1> <br /> <input class="" type="text" placeholder="Title" aria-label="title" value={title} onChange={(e)=>settitle(e.target.value)} /></label><br />
                <label htmlFor="author"><h1>Author</h1><br /> <input class="" type="text" placeholder="Author" aria-label="author" value={author} onChange={(e)=>setauthor(e.target.value)} /></label><br />
                <label htmlFor="rating"><h1>Rating</h1> <br /><input class="" type="number" min="0" max="5" placeholder="Rating" aria-label="rating" value={rating} onChange={(e)=>setrating(e.target.value)} /></label><br />
                <label htmlFor="genre"><h1>Genre</h1> <br /> <input class="" type="text" placeholder="genre" aria-label="Genre" value={genre} onChange={(e)=>setgenre(e.target.value)} /></label>
    
                <div className="but">
                    <button onClick="">Add </button>
                </div>
                </form>
                </div>
            
        </div>
     );
}
 
export default AddBooks;