"use client";
import { useCoinContext } from "@/context/CoinContext";

function SearchForm() {
  const { search, handleChange } = useCoinContext();

  return (
    <form className="mt-12">
      <input
        type="text"
        placeholder="Search a coin"
        className="w-full text-lg sm:text-xl p-4 text-center rounded bg-gray-800 focus:bg-gray-900"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default SearchForm;
