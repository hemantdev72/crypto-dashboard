import React from "react";

const CardSection = (props) => {
  return (
    <div>
      <div
        className="text-5xl font-bold m-3 text-white capitalize"
        style={{
          fontFamily: "NHaasGroteskDSPro-65Md",
          marginTop: "3px !important",
          marginBottom: "0px !important",
        }}
      >
        {props.coinName}
      </div>
      <section
        className="flex justify-center gap-10 m-3 mb-0"
        style={{ marginTop: " 2px !important" }}
      >
        {/* Market Cap 24Hrs */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2 rounded">
          <div className="p-4 text-white flex flex-col justify-between gap-4">
            <h6
              className="text-sm text-white font-bold"
              style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            >
              Market Cap 24Hrs
            </h6>
            <p
              className="font-bold text-lg text-white"
              style={{ color: "#fcdf03" }}
            >
              {props.mCap24} %
            </p>
          </div>
        </div>
        {/* All Time High */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2  rounded">
          <div className="p-4 flex flex-col justify-between gap-4">
            <h6 className="text-sm font-bold text-white">All Time High</h6>
            <p className="font-bold text-lg" style={{ color: "#fcdf03" }}>
              ${props.ath}
            </p>
          </div>
        </div>
        {/* All Time Low */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2 rounded">
          <div className="p-4  flex flex-col justify-between gap-4">
            <h6 className="text-sm font-bold">All Time Low</h6>
            <p className="font-bold text-lg" style={{ color: "#fcdf03" }}>
              ${props.atl}
            </p>
          </div>
        </div>
        {/* Positive Sentiments */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2 rounded">
          <div className="p-4 flex flex-col justify-between gap-4">
            <h6 className="text-sm font-bold">Positive Sentiments </h6>
            <p className="font-bold text-lg" style={{ color: "#fcdf03" }}>
              {props.sentiment} %
            </p>
          </div>
        </div>
        {/* High 24Hrs */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2 rounded">
          <div className="p-4 flex flex-col justify-between gap-4">
            <h6 className="text-sm font-bold"> High 24Hrs </h6>
            <p
              className="font-bold text-lg"
              style={{ color: "rgb(51, 255, 0) " }}
            >
              ${props.high24}
            </p>
          </div>
        </div>
        {/* Low 24Hrs */}
        <div className="bg-gray-800 text-white text-center m-3 w-30 p-2  rounded">
          <div className="p-4 flex flex-col justify-between gap-4">
            <h6 className="text-sm font-bold"> Low 24Hrs </h6>
            <p
              className="font-bold text-lg"
              style={{ color: "rgb(255, 32, 32)" }}
            >
              ${props.low24}
            </p>
          </div>
        </div>
      </section>
      <div>
        <div
          className="text-white text-center font-bold mb-2"
          style={{
            overflow: "visible",
            height: "2px",
            marginTop: "1%",
          }}
        >
          Current Price
        </div>
        <div
          className="text-8xl font-extrabold text-[#facc15] text-center mb-2"
          style={{
            textDecoration: "none solid rgb(255, 255, 255)",
            textAlign: "center",
          }}
        >
          ${props.currentPrice}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
