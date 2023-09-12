import PropTypes from 'prop-types'
import Bookmark from './bookmark';
const Reading = ({reading,readingtime}) => {
    return (
        <div className="1/3 bg-orange-200 p-4">

            <h2 className='text-3xl pb-5'>Reading Time:{readingtime}</h2>
            <h1 className='text-3xl'>Bookmarks:{reading.length}</h1>

            {
                reading.map((readings,idx)=> <Bookmark key={idx} readings={readings}>

                </Bookmark>)
            }
        </div>
    );
};
Reading.propTypes={
    reading:PropTypes.array
    
}

export default Reading;