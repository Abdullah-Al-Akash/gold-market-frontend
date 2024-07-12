
const WhyGoldMarket = () => {
    return (
        <div className="pb-12" 
        data-aos-anchor-placement="top-center">
           <h3 className="text-4xl text-white text-center font-semibold">Why<a className="btn btn-ghost text-warning text-2xl">G<span className="text-white text-sm mt-2">old</span> M <span className="text-white text-sm mt-2">arket</span> </a></h3> 
           <div className="grid grid-cols-1 md:grid-cols-3
            gap-8 py-12 px-8 " data-aos="fade-up"
            >
            <div  data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"  className="shadow-2xl bg-gray-900 rounded-b-2xl">
                <h3 className="text-center text-2xl bg-warning p-4 rounded-t-2xl font-semibold text-black">Easy</h3>
                <p className="text-gray-300 px-4 py-8 text-center leading-8 rounded-b-2xl">Buy, sell and collect gold in just a few taps. Through the Gold Market app, hallmarked & certified 22 Karat gold is available to you right at your fingertips.</p>
            </div>
            <div  data-aos-offset="200"
        data-aos-delay="1000"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" className="shadow-2xl bg-gray-900 rounded-b-2xl">
                <h3 className="text-center text-2xl bg-warning p-4 rounded-t-2xl font-semibold text-black">Safe</h3>
                <p className="text-gray-300 px-4 py-8 text-center leading-8 rounded-b-2xl">All gold bought through the Gold Market app is stored in highly secured and insured vaults. We offer easy and secured payment options that are simple to operate.</p>
            </div>
            <div  data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" className="shadow-2xl bg-gray-900 rounded-b-2xl">
                <h3 className="text-center text-2xl bg-warning p-4 rounded-t-2xl font-semibold text-black">Trusted</h3>
                <p className="text-gray-300 px-4 py-8 text-center leading-8 rounded-b-2xl">We pledge to ensure that your 22 Karat gold coins and bars are safely delivered to your desired location in a tamper-proof sealed packaging.</p>
            </div>
           </div>
        </div>
    );
};

export default WhyGoldMarket;