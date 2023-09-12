import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blogs = ({blog,handlreading,readingtimehandle}) => {
   const {id,cover,title,author_img,name,reading_time,date}=blog;
    return (
        <div className='my-10'>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center '>
            <div className='flex gap-5 my-7 items-center'>
            <img className='w-10 rounded-full' src={author_img} alt="" />
            <div>
            <h2>{name}</h2>
            <h3>{date}</h3>
            </div>
            </div>
            <div className='flex gap-4'>
           <h3>{reading_time} min read</h3>
           <button onClick={()=> handlreading(blog)}><FaBookmark></FaBookmark></button>
           </div>
           </div>
          <h3>{title}</h3>
          <button onClick={()=>readingtimehandle(id,reading_time)} className='mt-5 text-red-600 font-bold underline'>Mark as time</button>
          </div>
         
    );
};
Blogs.propTypes={
    blog:PropTypes.object
   
}

export default Blogs;