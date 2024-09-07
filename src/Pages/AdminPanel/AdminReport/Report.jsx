import React from "react";

const Report = () => {
  return (
    <div>
      <h3 className="text-center my-8 text-4xl font-semibold brand-color">
        Admin Report
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
        <div className="h-[250px]  bg-yellow-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">Total Vault</h3>
            <h3 className="text-3xl font-semibold text-black">0 Gram</h3>
          </div>
        </div>
        <div className="h-[250px]  bg-green-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              In Terms of Gold
            </h3>
            <h3 className="text-3xl font-semibold text-black">0 Gram</h3>
          </div>
        </div>
        <div className="h-[250px]  bg-green-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              In Terms of Gold
            </h3>
            <h3 className="text-3xl font-semibold text-black">0 Gram</h3>
          </div>
        </div>
        <div className="h-[250px]  bg-yellow-500 flex items-center justify-center rounded">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-black">
              Earning <span className="text-sm">(2% Commision)</span>
            </h3>
            <h3 className="text-3xl font-semibold text-black">0 Gram</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
