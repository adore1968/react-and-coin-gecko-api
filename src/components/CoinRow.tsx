/* eslint-disable @next/next/no-img-element */
import { Coin } from "@/utils/interfaces";

interface Props {
  value: Coin;
  index: number;
}

function CoinRow({ value, index }: Props) {
  return (
    <tr className="text-lg sm:text-xl border-b hover:bg-gray-950 transition-colors ease-in last-of-type:border-b-0 text-gray-200">
      <th scope="row" className="px-6 py-4">
        {index + 1}
      </th>
      <td className="flex px-6 py-4 items-center gap-2.5">
        <img src={value.image} alt={value.name} className="rounded-full w-8" />
        <span>{value.name}</span>
        <span className="text-gray-400 uppercase">{value.symbol}</span>
      </td>
      <td className="px-6 py-4">{value.current_price.toLocaleString()}</td>
      <td
        className={`${
          value.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        } px-6 py-4`}
      >
        {value.price_change_percentage_24h}
      </td>
      <td className="px-6 py-4">{value.total_volume.toLocaleString()}</td>
    </tr>
  );
}

export default CoinRow;
