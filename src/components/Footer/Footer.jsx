import Logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <footer className="text-xs sm:text-sm text-gray-400 bg-[rgb(6,9,26)]">
                <div className="flex justify-center pt-64">
                    <img className="sm:w-28" src={Logo} alt="" />
                </div>
                <div className="flex w-4/5 mx-auto py-10">
                    <div className='flex-1'>
                        <h6 className="text-sm sm:text-lg font-bold text-white">About Us</h6>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='flex-1'>
                        <h6 className="text-sm sm:text-lg font-bold text-white">Quick Links</h6>
                        <ul className='list-disc list-inside'>
                            <li><a>Home</a></li>
                            <li><a>Service</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex-1 space-y-2'>
                        <h6 className="text-sm sm:text-lg font-bold text-white">Subscribe</h6>
                        <span className="">Subscribe to our newsletter for latest updates.</span>
                        <div className="join">
                            <input id='footer-input'
                                type="text"
                                placeholder="Enter You Email"
                                className="input input-sm input-bordered join-item" />
                            <button className="join-item bg-gradient-to-r from-sky-300 to-orange-400 w-28 text-black font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center py-5">@2024 Your Company All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;