import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import PropTypes from 'prop-types';


const Blog = ({handlreading,readingtimehandle}) => {
    const [blog,setblog]=useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setblog(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>Blog:{blog.length}</h1>

            {
                blog.map(blog=> <Blogs
                 key={blog.id}
                  blog={blog}
                  handlreading ={handlreading}
                  readingtimehandle={readingtimehandle}
                  >
               
                </Blogs>)
            }
        </div>
        
    );
};

Blog.propTypes={
    handlreading:PropTypes.func
}

export default Blog;