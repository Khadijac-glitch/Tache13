import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogList({ blogs,title}) {
  
  return (
    <div>
        <h2 className='right'>{title}</h2>
       {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to = {`/blogs/ ${blog.id}`}>
          <div className="right">
            <h2>{blog.title}</h2>
          <p>Written by {blog.autor}</p>
          </div>
          </Link>
          
        </div>
      ))}
    </div>
  )
}
