import { ChangeEvent } from "react";

export interface Coin {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export type Coins = Coin[];

export interface CoinContextType {
  coins: Coins;
  isLoading: boolean;
  search: string;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}
