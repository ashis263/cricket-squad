import PropTypes from 'prop-types';
import { MdOutlineDelete } from "react-icons/md";


const SelectedPlayer = ({ selectedPlayer, handleUnselect }) => {
    return (
        <div className='flex justify-between items-center px-8 py-1 border-2 rounded-xl'>
            <div className='flex items-center gap-5'>
            <div className='items-center h-36  rounded-xl pb-5'>
                <img className='w-20 z-0 relative top-[19%]' src={selectedPlayer.image} alt={selectedPlayer.name + 'photo'} />
                <img className='relative rounded-full w-20 z-10' src="https://cricketvectors.akamaized.net/jersey/limited/org/29.png?impolicy=default_web" alt="jersey" />
            </div>
                <div>
                    <h4 className='text-lg font-bold'>{selectedPlayer.name}</h4>
                    <p>{selectedPlayer?.bowl || selectedPlayer.bat}</p>
                </div>
            </div>
            <MdOutlineDelete className='text-red-400 text-2xl' onClick={() => handleUnselect(selectedPlayer)}/>
        </div>
    );
};


SelectedPlayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handleUnselect: PropTypes.func.isRequired
};


export default SelectedPlayer;
