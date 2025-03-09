import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schemas/crypto-schema";
import { Pair } from "../types";
const host = "https://min-api.cryptocompare.com";
export async function getCryptos() {
  const url = "/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(`${host}${url}`);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) return result.data;
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const { currency, cryptocurrency } = pair;
  const url = `/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  const {
    data: { DISPLAY },
  } = await axios(`${host}${url}`);

   const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency]);

  if (result.success) return result.data;
}
