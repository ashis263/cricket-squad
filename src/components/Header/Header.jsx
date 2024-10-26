import PropTypes from 'prop-types';
import { TbCoin } from "react-icons/tb";
import Logo from '../../assets/logo.png'


const Header = ({credit}) => {
    return (
        <div className="flex justify-between items-center py-5 sticky top-0 bg-white z-20">
            {/* navbar left starts*/}
            <div className="flex items-center">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <img className="w-7 sm:w-8 md:w-12 lg:w-16" src={Logo} alt="Logo" />
            </div>
            {/* navbar left ends*/}
            {/* navbar right starts*/}
            <div className="flex items-center gap-5">
                <ul className="menu hidden md:menu-horizontal px-0 text-gray-500 ">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
                <div className="flex">
                    <div className="text-xs lg:text-sm sm:text-auto flex items-center gap-1 font-semibold p-1 sm:p-2 border rounded-xl">
                        <p>{credit} Coin</p>
                        <TbCoin className="text-yellow-400 text-lg" />
                    </div>

                </div>
            </div>
            {/* navbar right ends*/}
        </div>
    )
}

Header.propTypes = {
    credit: PropTypes.number.isRequired
}

export default Header;
