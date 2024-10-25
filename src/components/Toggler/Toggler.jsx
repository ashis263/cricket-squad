import PropTypes from 'prop-types';


const Toggler = ({active, handleActive, selected, players}) => {
    return (
        <div className="flex justify-between my-5 items-center">
          <h3 className="text-xl font-semibold">{(active === 'available') ? 'Available Players' : `Selected Players(${selected.length}/${players.length})`}</h3>
          <div className="flex rounded-xl border cursor-pointer">
            <p onClick={() => handleActive('available')} style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} className={(active === 'available') ? "activeBg font-semibold w-36 px-7 p-2 hover:font-bold" : "w-36 px-7 p-2 hover:font-bold hover:bg-gray-100"}>Available</p>
            <p onClick={() => handleActive('selected')} style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }} className={(active === 'selected') ? "activeBg font-semibold w-36 px-7 p-2 hover:font-bold" : "w-36 px-7 p-2 hover:font-bold hover:bg-gray-100"}>Selected({selected.length})</p>
          </div>
        </div>
    );
};


Toggler.propTypes = {
    active: PropTypes.string.isRequired,
    handleActive: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,           
    players: PropTypes.array.isRequired,           
};


export default Toggler;
