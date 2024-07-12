import WaterWave from "react-water-wave";
import image from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <WaterWave
        className="h-[60vh] md:h-[80vh]"
        imageUrl={image}
        dropRadius={30}
        // resolution={400}
        // interactive={false}
        style={{
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {() => (
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
            className="flex justify-center items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-2"
          >
            <div className="w-full md:w-1/2 leading-loose text-center md:text-start">
              <h3 className="brand-color text-7xl font-bold">Buy Gold</h3>
              <p className="text-white mt-4 text-2xl">
                In Fractional Amount From Your Home
              </p>
              <button className="btn btn-warning mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default Banner;
