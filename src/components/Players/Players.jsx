import PropTypes from 'prop-types';
import Player from "../Player/Player";

const Players = ({players}) => {
    return (
        <div className="mb-52">
            <div className="grid grid-cols-3 gap-3">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
}

Players.propTypes = {
    players: PropTypes.array.isRequired
}

export default Players;
