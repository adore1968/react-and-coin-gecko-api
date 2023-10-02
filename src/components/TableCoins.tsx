"use client";
import { useCoinContext } from "@/context/CoinContext";
import Loader from "./Loader";
import CoinRow from "./CoinRow";

function TableCoins() {
  const { coins, isLoading, search } = useCoinContext();

  if (isLoading) return <Loader />;

  const filteredCoins = coins.filter((value) =>
    value.name.toLowerCase().includes(search.toLowerCase())
  );

  if (coins.length < 1 || filteredCoins.length < 1) {
    return (
      <div className="pt-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          There are no matching coins...
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 my-12 rounded">
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b text-lg sm:text-xl text-left uppercase font-medium">
            <th className="px-6 py-3" scope="col">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Price Change
            </th>
            <th scope="col" className="px-6 py-3">
              24h Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((value, index) => (
            <CoinRow key={index} value={value} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TableCoins;
