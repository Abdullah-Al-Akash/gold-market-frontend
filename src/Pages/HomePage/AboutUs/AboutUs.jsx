import image from "../../../assets/about.png";

const AboutUs = () => {
    return (
    <div className="hero min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div data-aos="fade-left" data-aos-duration="800" className="text-center w-full md:w-1/2 lg:text-left ms-0 md:ms-8">
                <h1 className="text-2xl">About Us</h1>
                <h1 className="text-4xl font-semibold mt-4 brand-color">The Era Of Responsible Gold</h1>
                <p className="py-4">
                <a className="btn btn-ghost text-warning text-2xl">G<span className="text-white text-sm mt-2">old</span> M <span className="text-white text-sm mt-2">arket</span> </a> is Bangladesh's first hallmarked & certified 22 Karat Gold buy, sell & storage app. The app aims to make access to gold easier and affordable for everyone. It is now possible to start your gold savings right from the palm of your hands. Gold Market facilitates 24/7 gold selling facilities. The app ensures collectability of stored gold via secured & safe delivery methods.
                </p>
            </div>
            <div data-aos="fade-right" className="card w-full md:w-1/2 shadow-2xl p-2 md:p-8">
                <img className="rounded-lg" src={image} alt="" />
            </div>
        </div>
    </div>
    );
};

export default AboutUs;