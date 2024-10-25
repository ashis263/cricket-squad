import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);
    return (
        <div>
            <div className="flex justify-between my-5 items-center">
                <h3 className="text-xl font-semibold">Available Players</h3>
                <div className="flex rounded-xl border cursor-pointer">
                    <p style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} className="bg-red-500 p-2">Available</p>
                    <p style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} className="bg-blue-300 p-2">Selected(0)</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
}

export default Players;
