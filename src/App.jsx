import React, { useState, useEffect } from "react";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import Header from "./components/Header";

const App = () => {
  const [id, setId] = useState("bitcoin");
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleSubmit = async (event) => {
    console.log(event.target.value);
    setId(event.target.value);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Adding id as a dependency to re-run the effect when id changes

  return (
    <div className="bg-[#0f172a]">
      <Header handle_Submit={handleSubmit} />
      <CardSection
        coinName={data.name}
        currentPrice={
          data.market_data ? data.market_data.current_price["usd"] : ""
        }
        mCap24={
          data.market_data
            ? data.market_data.market_cap_change_percentage_24h
            : ""
        }
        ath={data.market_data ? data.market_data.ath.usd : ""}
        atl={data.market_data ? data.market_data.ath.usd : ""}
        sentiment={data.sentiment_votes_up_percentage}
        high24={data.market_data ? data.market_data.high_24h["usd"] : ""}
        low24={data.market_data ? data.market_data.low_24h["usd"] : ""}
      />
      <ChartSection
        Id={id}
        priceChange24={
          data.market_data
            ? data.market_data.price_change_24h_in_currency.usd
            : ""
        }
        MarketCap={data.market_data ? data.market_data.market_cap.usd : ""}
        TotVol={data.market_data ? data.market_data.total_volume.usd : ""}
        Circulating={
          data.market_data ? data.market_data["circulating_supply"] : ""
        }
        twitterF={
          data.community_data ? data.community_data.twitter_followers : ""
        }
      />
    </div>
  );
};

export default App;
