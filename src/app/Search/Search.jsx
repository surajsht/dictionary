"use client";

import { useState } from "react";
import { CustomContext } from "../Context/Context";

const Search = () => {
  let [searchValue, setSearchValue] = useState("");

  let { setSearchResult, setLoading } = CustomContext();

  const SearchWord = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`,
        { cache: "no-store" }
      );
      const data = await resp.json();
      setSearchResult(data);
      setLoading(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:flex sm:gap-4"
        onSubmit={(e) => SearchWord(e)}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 sm:w-[80%] sm:mb-0"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-[20%]"
          type="button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
