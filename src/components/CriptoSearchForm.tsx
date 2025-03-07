import { ChangeEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Criptomoneda:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option
              key={cryptocurrency.CoinInfo.FullName}
              value={cryptocurrency.CoinInfo.Name}
            >
              {cryptocurrency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
