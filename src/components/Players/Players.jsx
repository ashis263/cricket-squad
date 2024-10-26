import PropTypes from 'prop-types';
import Player from "../Player/Player";

const Players = ({ players, handleChoose }) => {
    return (
        <div className="mb-52">
            <h3 className="text-xl font-semibold mb-5">Available Players</h3>
            <div className="grid grid-cols-3 gap-3">
                {
                    players.map(player => <Player key={player.id} player={player} handleChoose={handleChoose}></Player>)
                }
            </div>
        </div>
    );
}

Players.propTypes = {
    players: PropTypes.array.isRequired,
    handleChoose: PropTypes.func.isRequired
}

export default Players;
