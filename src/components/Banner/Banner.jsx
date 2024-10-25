import PropTypes from 'prop-types';
import './banner.css'

const Banner = ({handleCredit}) => {
    return (
        <div className="bg flex flex-col items-center py-10 gap-5 text-white rounded-xl">
            <img className="border-2 border-gray-500 border-dashed" src="src/assets/banner-main.png" alt="cricket image" />
            <h2 className='font-bold text-3xl'>Assemble Your Ultimate Cricket Squad</h2>
            <h4 className="text-lg">Beyond Boundaries Beyond Limits</h4>
            <div className='p-2 rounded-xl claim-btn-border'>
                <button onClick={handleCredit} className="btn claim-btn">Claim Free Credit</button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleCredit: PropTypes.func.isRequired
}

export default Banner;