// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Selected = ({selected, handleUnselect}) => {
    return (
        <div className='space-y-5 mb-52'>
            {selected.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} handleUnselect={handleUnselect}></SelectedPlayer>)}
        </div>
    );
};


Selected.propTypes = {
    selected: PropTypes.array.isRequired,
    handleUnselect: PropTypes.func.isRequired
};


export default Selected;
