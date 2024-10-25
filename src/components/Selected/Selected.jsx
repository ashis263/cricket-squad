import PropTypes from 'prop-types';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './selected.css';

const Selected = ({ selected, handleUnselect, handleActive }) => {
    return (
        <div className='mb-52 space-y-10'>
            <div className='space-y-5 '>
                {selected.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleUnselect={handleUnselect}></SelectedPlayer>)}
            </div>
            <div className='w-[210px] p-2 rounded-xl border-2 border-gray-200'>
                <button onClick={() => handleActive('available')} className="w-48 btn add-btn">Add More Player</button>
            </div>
        </div>
    );
};


Selected.propTypes = {
    selected: PropTypes.array.isRequired,
    handleUnselect: PropTypes.func.isRequired,
    handleActive: PropTypes.func.isRequired
};


export default Selected;
