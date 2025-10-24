import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const TopRated = ({top}) => {
  const [providerData, setProviderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!top || top.length === 0) {
      setError("No top rated providers found.");
      setProviderData([]);
      setIsLoading(false);
      return;
    }
    setProviderData(top);
    setError(null);
    setIsLoading(false);
  }, [top]);


  if (isLoading) {
    return (
      <section className="w-11/12 mx-auto mt-12 text-center">
        <p className="text-xl text-gray-600">Loading top providers... ⏳</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className="w-11/12 mx-auto mt-12 text-center">
        <p className="text-xl text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="w-11/12 mx-auto mt-12 grid grid-cols-1  gap-6">
      {providerData.map((provider) => (
        <Link
          key={provider.skillId}
          to={`/skills/${provider.skillId}`}
          className="card gap-8 shadow-2xl bg-base-300 hover:scale-105 transition ease-in-out"
        >
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 border border-gray-200">
            <div className="mt-4">
              <h2 className="text-xl text-center font-bold text-gray-800">
                {provider.skillName}
              </h2>
              <p className="text-gray-500 text-sm mb-1 text-center">
                By <span className="font-semibold">{provider.providerName}</span>
              </p>
              <p className="text-yellow-500 font-semibold text-center">
                <span className="flex justify-center items-center">
                  <FaStar className="mr-1" />
                  {provider.rating}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default TopRated;