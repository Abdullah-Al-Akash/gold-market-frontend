import image from "../../../assets/about.png";

const AboutUs = () => {
    return (
    <div className="hero min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-full md:w-1/2 lg:text-left ms-0 md:ms-8">
                <h1 className="text-2xl">About Us</h1>
                <h1 className="text-4xl font-semibold mt-4 brand-color">The Era Of Responsible Gold</h1>
                <p className="py-4">
               <span className="brand-color font-semibold">G</span>old <span className="brand-color font-semibold">M</span>arket is Bangladesh's first hallmarked & certified 22 Karat Gold buy, sell & storage app. The app aims to make access to gold easier and affordable for everyone. It is now possible to start your gold savings right from the palm of your hands. Gold Kinen facilitates 24/7 gold selling facilities. The app ensures collectability of stored gold via secured & safe delivery methods.
                </p>
            </div>
            <div className="card w-full md:w-1/2 shadow-2xl p-2 md:p-8">
                <img className="rounded-lg" src={image} alt="" />
            </div>
        </div>
    </div>
    );
};

export default AboutUs;