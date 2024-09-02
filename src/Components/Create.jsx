import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [autor, setAutor] = useState('mario');
    const[isPending,setIsPending]= useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
      const blog = {title, body, autor};
      fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(blog)
      }).then(()=> {
        console.log('new blog added');
        setIsPending(false);
      })

      console.log(blog);
    }
    return (  
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                 <label>Blog body:</label>
             <textarea 
             required
             value={body}
             onChange={(e) => setBody(e.target.value)}
             >
               
           
             </textarea>
             <label>Blog author:</label>
            <select
            
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
                <p> {title} </p>
                <p> {body} </p>
                <p> {autor} </p>
            </form>
        </div>
    );
}
 
export default Create;