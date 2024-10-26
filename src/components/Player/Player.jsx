import PropTypes from 'prop-types';
import './player.css'
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";



const Player = ({ player, handleChoose }) => {
    const { image, name, country, category, bat, bowl, price } = player;
    return (
        <div className='border-2 rounded-xl px-5 pt-0 pb-20 space-y-1'>
            <div className='flex flex-col items-center h-[68%] player-bg  rounded-xl pb-5'>
                <img className='w-3/4 z-0 relative top-[19%]' src={image} alt={name + 'photo'} />
                <img className='rounded-full w-3/4 relative z-10' src="https://cricketvectors.akamaized.net/jersey/limited/org/29.png?impolicy=default_web" alt="" />
            </div>
            <div className='mt-5 flex items-center gap-5'>
                <FaUser />
                <p className='text-xl font-bold'>{name}</p>
            </div>
            <div className='text-gray-500 flex justify-between pb-2'>
                <div className='flex gap-1 items-center'>
                    <CiFlag1 />
                    <p>{country}</p>
                </div>
                <div className='p-2 rounded-lg border bg-slate-50'>
                    <p className='font-semibold'>{category}</p>
                </div>
            </div>
            <p className='font-semibold text-lg'>Rating</p>
            {
                (category === 'Batsman') ? <div className='flex justify-between'><p className='font-semibold'>{bat}</p><p >Bowling: N/A</p>
                </div> : <div className='flex justify-between'><p className='font-semibold'>{bowl}</p>
                    <p>{bat}</p></div>
            }
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Price: {price}</p>
                <div onClick={() => handleChoose(player)} className='p-2 border rounded-lg bg-slate-100 cursor-pointer hover:bg-gray-400'>
                    <p className='font-semibold'>Choose Player</p>
                </div>
            </div>
        </div>
    );
};


Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleChoose: PropTypes.func.isRequired
};


export default Player;
