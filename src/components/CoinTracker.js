import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [select, setSelect] = useState(null);
  const [result, setResult] = useState(null); // 계산 결과를 저장할 상태

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const handleCalculate = () => {
    if (money && select) {
      setResult(money / select); // 계산 결과 저장
    } else {
      alert("Please enter a valid amount and select a coin.");
    }
  };

  return (
    <div>
      <h1>The Coins! {!loading && `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <input
            type="number"
            placeholder="How Many Dollars You Have?"
            style={{ display: "block" }}
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
          <select
            onChange={(e) =>
              setSelect(coins[e.target.value]?.quotes?.USD?.price)
            }
          >
            <option value="">Please Select</option>
            {coins.map((coin, index) => (
              <option key={coin.id} value={index}>
                {coin.name} ({coin.symbol}) : ${coin.quotes?.USD?.price} USD
              </option>
            ))}
          </select>
          <button onClick={handleCalculate}>Calculate</button>
        </>
      )}
      {result !== null && (
        <h2>
          You can buy approximately {result.toFixed(6)} units of the selected
          coin.
        </h2>
      )}
    </div>
  );
}

export default CoinTracker;
