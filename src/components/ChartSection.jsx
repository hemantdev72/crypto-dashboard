import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ChartSection = (props) => {
  const [chartState, setChartState] = useState({
    Price: {
      options: {
        chart: {
          id: "area-datetime",
        },
        grid: {
          show: false,
        },
        title: {
          text: "Market Price (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fcdf03",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#fcdf03"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
        selection: 365,
      },
      series: [
        {
          name: "Market Price",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Market_Cap: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Cap (USD)",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ff69f5",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#ff69f5"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Cap (USD)",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
    Tot_Vol: {
      options: {
        grid: {
          show: false,
        },
        title: {
          text: "Market Volume",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "#00ffea",
          },
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#00ffea"],
        tooltip: {
          y: {
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
          theme: "dark",
        },
      },
      series: [
        {
          name: "Market Volume",
          data: [[1645837250522, 39804.53519937617]],
        },
      ],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      let chartData = await fetch(
        `https://api.coingecko.com/api/v3/coins/${props.Id}/market_chart?vs_currency=usd&days=${chartState.Price.options.selection}`
      );
      let jsonChartData = await chartData.json();
      setChartState((prevState) => ({
        ...prevState,
        Price: {
          ...prevState.Price,
          series: [{ name: "Market Price", data: jsonChartData.prices }],
        },
        Market_Cap: {
          ...prevState.Market_Cap,
          series: [{ name: "Market Price", data: jsonChartData.market_caps }],
        },
        Tot_Vol: {
          ...prevState.Tot_Vol,
          series: [{ name: "Market Price", data: jsonChartData.total_volumes }],
        },
      }));
    };

    fetchData();
    const interval = setInterval(() => fetchData(), 2000);
    return () => clearInterval(interval);
  }, [props.Id, chartState.Price.options.selection]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        <div className="w-full md:w-[55%] px-2">
          <div id="chart" className="mb-4 ">
            <div className="flex gap-2 mb-2">
              <button
                onClick={() =>
                  setChartState((prevState) => ({
                    ...prevState,
                    Price: {
                      ...prevState.Price,
                      options: {
                        ...prevState.Price.options,
                        selection: 1,
                      },
                    },
                  }))
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                1D
              </button>
              <button
                onClick={() =>
                  setChartState((prevState) => ({
                    ...prevState,
                    Price: {
                      ...prevState.Price,
                      options: {
                        ...prevState.Price.options,
                        selection: 7,
                      },
                    },
                  }))
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                1W
              </button>
              <button
                onClick={() =>
                  setChartState((prevState) => ({
                    ...prevState,
                    Price: {
                      ...prevState.Price,
                      options: {
                        ...prevState.Price.options,
                        selection: 30,
                      },
                    },
                  }))
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                1M
              </button>
              <button
                onClick={() =>
                  setChartState((prevState) => ({
                    ...prevState,
                    Price: {
                      ...prevState.Price,
                      options: {
                        ...prevState.Price.options,
                        selection: 182,
                      },
                    },
                  }))
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                6M
              </button>
              <button
                onClick={() =>
                  setChartState((prevState) => ({
                    ...prevState,
                    Price: {
                      ...prevState.Price,
                      options: {
                        ...prevState.Price.options,
                        selection: 365,
                      },
                    },
                  }))
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                1Y
              </button>
            </div>
            <Chart
              options={chartState.Price.options}
              series={chartState.Price.series}
              type="area"
              height="400"
              width="600"
            />
          </div>
        </div>
        <div className="mt-10  px-2">
          <div className="card-body mb-4">
            <h6 className="text-lg text-white">Market Cap</h6>
            <p className="text-sm font-bold  text-gray-300">
              $ {props.MarketCap}
            </p>
          </div>
          <div className="card-body mb-4">
            <h6 className=" text-lg text-white">Price Change 24hrs</h6>
            <p className="text-sm font-bold text-gray-300">
              $ {props.priceChange24}
            </p>
          </div>
          <div className="card-body mb-4">
            <h6 className=" text-lg text-white">Total Volume</h6>
            <p className="text-sm font-bold text-gray-300">$ {props.TotVol}</p>
          </div>
          <div className="card-body mb-4">
            <h6 className="text-lg text-white">Circulating Supply</h6>
            <p className="text-sm font-bold  text-gray-300">
              {props.Circulating}
            </p>
          </div>
          <div className="card-body mb-4">
            <h6 className=" text-lg text-white">Twitter Followers</h6>
            <p className="text-sm font-bold text-gray-300">{props.twitterF}</p>
          </div>
        </div>
        <div className=" px-2">
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
            <Chart
              options={chartState.Market_Cap.options}
              series={chartState.Market_Cap.series}
              type="line"
              height="200"
              width="300"
            />
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
            <Chart
              options={chartState.Tot_Vol.options}
              series={chartState.Tot_Vol.series}
              type="line"
              height="200"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
