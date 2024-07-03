import { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a 1-second delay before hiding the loading screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            {
                loading ? (
                    <div className='h-[100vh] flex justify-center items-center p-4'>
                        <div data-aos="flip-right" className='border-4 border-warning p-8 rounded-lg'>
                            <h3 className='text-5xl text-white text-center'>Welcome</h3>
                            <p className='text-5xl text-white text-center mt-6'>To</p>
                        <a className="btn btn-ghost text-warning lg:text-8xl text-5xl mt-4">G<span className="text-white text-4xl lg:mt-10 mt-2">old</span> M <span className="text-white text-4xl lg:mt-10 mt-2">arket</span> <span className='brand-color'>...</span> </a>
                        </div>
                    </div>
                )
                :
                    <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
            }
        </div>
    );
};

export default Main;