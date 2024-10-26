import './newsletter.css'

const Newsletter = () => {
    return (
        <div>
            <div className='relative top-48 p-5 border-white border-2 rounded-xl bg-[#ffffff0b]'>
                <div className="flex flex-col items-center gap-5 py-24 rounded-xl bgGrad">
                    <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-500">Get the latest updates and news right in your inbox!</p>
                    <div className="flex space-x-2">
                        <input id='newsletter-input' className="input w-[500px] input-bordered" placeholder="Enter your email" />
                        <button className="btn bg-gradient-to-r from-sky-300 to-orange-400 w-40">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
