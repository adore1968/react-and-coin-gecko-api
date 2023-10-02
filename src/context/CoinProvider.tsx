"use client";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { CoinContext } from "./CoinContext";
import { Coins } from "@/utils/interfaces";
import axios, { AxiosError } from "axios";

interface Props {
  children: ReactNode;
}

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function CoinProvider({ children }: Props) {
  const [coins, setCoins] = useState<Coins>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  const getCoins = async () => {
    try {
      const { status, data } = await axios<Coins>(url);
      if (status === 200) setCoins(data);
    } catch (error) {
      if (error instanceof AxiosError) console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setSearch(value);
  };

  return (
    <CoinContext.Provider value={{ coins, isLoading, search, handleChange }}>
      {children}
    </CoinContext.Provider>
  );
}

export default CoinProvider;
