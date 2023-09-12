import profile from '../images/profile.png'
const Heads = () => {
    return (
        <div className='flex justify-between items-center border-b-4 py-5'>
             <h1 className='text-4xl '>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Heads;
