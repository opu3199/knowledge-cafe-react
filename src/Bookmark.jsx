import PropTypes from 'prop-types'

const Bookmark = ({readings}) => {
    const {title}=readings;
    return (
        <div className=' mt-10 bg-slate-300 p-4 rounded-lg'>
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes={
    readings:PropTypes.object
}

export default Bookmark;


