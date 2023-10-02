import { CoinContextType } from "@/utils/interfaces";
import { createContext, useContext } from "react";

export const CoinContext = createContext<CoinContextType | null>(null);

export const useCoinContext = () => {
  const coinContext = useContext(CoinContext);
  if (!coinContext) {
    throw new Error(
      "useCoinContext has to be used within <CoinContext.Provider>"
    );
  }
  return coinContext;
};
