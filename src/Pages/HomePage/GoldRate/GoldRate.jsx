const GoldRate = () => {
  return (
    <div
      className=""
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <h3 className="text-center brand-color text-2xl md:text-4xl font-semibold">
        Gold Rate Today
      </h3>

      <div className="overflow-x-auto px-4 lg:w-3/4 mx-auto my-10 lg:my-14">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr className="bg-warning">
              <th></th>
              <th className="md:text-xl text-lg text-black">Product</th>
              <th className="md:text-xl text-lg text-black">Description</th>
              <th className="md:text-xl text-lg text-black">Price</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            <tr className="border-warning">
              <th className="md:text-lg text-white">1</th>
              <td className="md:text-lg brand-color">22 KARAT Gold</td>
              <td className="text-white">CADMIUM (HALLMARKED GOLD)</td>
              <td className="md:text-lg brand-color">10,055 BDT/GRAM</td>
            </tr>
            <tr className="border-warning">
              <th className="md:text-lg text-white">2</th>
              <td className="md:text-lg brand-color">21 KARAT Gold</td>
              <td className="text-white">CADMIUM (HALLMARKED GOLD)</td>
              <td className="md:text-lg brand-color">9,598 BDT/GRAM</td>
            </tr>
            <tr className="border-warning">
              <th className="md:text-lg text-white">3</th>
              <td className="md:text-lg brand-color">18 KARAT Gold</td>
              <td className="text-white">CADMIUM (HALLMARKED GOLD)</td>
              <td className="md:text-lg brand-color">8,227 BDT/GRAM</td>
            </tr>
            <tr className="border-warning">
              <th className="md:text-lg text-white">4</th>
              <td className="md:text-lg brand-color">TRADITIONAL Gold</td>
              <td className="text-white"></td>
              <td className="md:text-lg brand-color">6,802 BDT/GRAM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoldRate;
