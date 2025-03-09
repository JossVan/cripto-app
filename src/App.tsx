import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceForm from "./components/CryptoPriceForm";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceForm />
        </div>
      </div>
    </>
  );
}

export default App;
