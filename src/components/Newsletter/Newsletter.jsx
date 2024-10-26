import './newsletter.css'

const Newsletter = () => {
    return (
        <div className='p-5 border-2 rounded-xl'>
            <div className="flex flex-col items-center gap-5 py-24 rounded-xl bgGrad">
                <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="text-gray-500">Get the latest updates and news right in your inbox!</p>
                <div className="flex space-x-2">
                    <input className="input w-[500px] input-bordered" placeholder="Enter your email" />
                    <button className="btn w-52">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
