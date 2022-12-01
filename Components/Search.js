import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Search = () => {
  const [city, setCity] = useState("");

  return (
    <div className="mx-2 lg:mx-20">
      <div className="relative flex justify-between items-center lg:max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl "
        >
          <div>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white font-light w-[13.5rem] lg:w-full"
              type="text"
              placeholder="Search city"
            />
          </div>
          <Link href={`${city}`}>
            <button>
              <BsSearch size={20} />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Search;
