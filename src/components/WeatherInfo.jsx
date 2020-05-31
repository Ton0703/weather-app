import React, { useState } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDashboard,
  AiOutlineCloud,
} from "react-icons/ai";
import { FiCloudRain } from "react-icons/fi";
import {
  WiThermometer,
  WiStrongWind,
  WiThermometerInternal,
} from "react-icons/wi";

function WeatherInfo({ data }) {
  const [visible, setVisible] = useState(false);
  const {
    cloud,
    cond_code,
    cond_txt,
    fl,
    hum,
    pcpn,
    pres,
    tmp,
    wind_dir,
    wind_sc,
  } = data;
  const details = [
    {
      icon: <WiThermometer />,
      title: "体表温度",
      value: fl + "度",
    },
    {
      icon: <WiStrongWind />,
      title: wind_dir,
      value: wind_sc + "级",
    },
    {
      icon: <WiThermometerInternal />,
      title: "湿度",
      value: hum + "度",
    },
    {
      icon: <FiCloudRain />,
      title: "降水量",
      value: pcpn + "mm",
    },
    {
      icon: <AiOutlineDashboard />,
      title: "气压",
      value: pres + "Pa",
    },
    {
      icon: <AiOutlineCloud />,
      title: "云量",
      value: cloud + "%",
    },
  ];
  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div
      className="weather-info"
      style={{ height: visible ? "380px" : "242.5px" }}
    >
      <div className="cond">
        <div className="cond-logo">
          <img src={`/cond-icon-heweather/${cond_code}.png`} alt="" />
        </div>
        <div className="cond-txt">{cond_txt}</div>
      </div>
      <div className="tmp">
        <div className="now-tmp">
          {tmp}
          <sup>&deg;C</sup>
        </div>
      </div>
      <div
        className="more"
        style={{ transform: visible ? "rotate(90deg)" : "rotate(-90deg" }}
      >
        <AiOutlineDoubleLeft onClick={toggleVisible} />
      </div>
      <div className="details">
        {details.map((item, index) => (
          <div key={index} className="detail">
            <div className="icon">{item.icon}</div>
            <div className="txt">
              <div className="detail-title">{item.title}</div>
              <div className="detail-value">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo;
