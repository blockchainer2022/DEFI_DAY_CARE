/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MintButton } from "../components/button";
// import { Link } from "react-router-dom";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
// import Image from "../assets/images/dirt.PNG";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const Mint = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState(0);
  const difference =
    +dayjs.utc("2021-10-30T11:07:00.000+0000", "YYYY-MM-DDTHH:mm:ss.000ZZ") -
    +new Date();

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  console.log(days);
  const { Handle } = Slider;
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };
  const mintHandler = () => {
    if (account) {
      mint(value);
    }
    if (!account) {
      loadWeb3();
    }
  };
  return (
    <main className="bg-mintPrimary mint-page flex">
      <div className="container md:px-40 flex-1">
        <a
          href="https://defidaycare.io/"
          target="_blank"
          rel="noreferrer"
          className="bg-orange inline-block py-3 px-6 rounded-full text-white mt-6"
        >
          Go Back
        </a>
        <h1 className="text-center text-4xl pt-16 text-white">
          Join the Daycare!
        </h1>
        <div className=" text-center  mt-4 ">
          <div className="w-full  slider mx-auto">
            <div className="text-white mx-auto  text-lg font-bold">
              Total DeFi Baby Minted {0}/{9999}
            </div>
            <div className="max-w-sm mx-auto my-4">
              <Slider min={0} max={9} defaultValue={1} handle={handle} />
            </div>
            <div className="text-white mx-auto  text-lg font-bold">
              Mint {value} DeFi Baby ({(0.09 * value).toFixed(4)}) Ether
            </div>
          </div>
          <div>
            <MintButton onClick={mintHandler} disabled={true}>
              {/* {account ? "Mint" : "Connect"} */}
              Mint
            </MintButton>
          </div>
        </div>
        {/* <div className="flex text-white justify-between text-center text-lg mt-10  w-full max-w-lg mx-auto">
          <div>
            <p>{days.toString().padStart(2, "0")}</p>
            <p>Days</p>
          </div>
          <div>
            <p>{hours.toString().padStart(2, "0")}</p>
            <p>Hours</p>
          </div>
          <div>
            <p>{minutes.toString().padStart(2, "0")}</p>
            <p>Minutes</p>
          </div>
          <div>
            <p>{seconds.toString().padStart(2, "0")}</p>
            <p>Seconds</p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Mint;
