import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";
const host = "https://min-api.cryptocompare.com";
export async function getCryptos() {
  const getCryptosHost = "/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(`${host}${getCryptosHost}`);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) return result.data;
}
