import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const weekday = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

function Header({ location, set, loading, setLoading }) {
  const date = new Date();
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  const handleSubmit = () => {
    if (input.trim() === "") return;
    set(input);
    setLoading(true);
    setInput("");
    setVisible(false);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="header">
      <div className="header-location">
        <div className="location">
          {location}
          <span>{location ? "市" : ""}</span>
        </div>
        {loading ? (
          <div className="fresh">
            <IoMdRefresh />
          </div>
        ) : (
          <div
            className="change-btn"
            onClick={handleClick}
            style={{ transform: visible ? "rotate(180deg)" : "rotate(0deg" }}
          >
            <FaExchangeAlt />
          </div>
        )}
      </div>
      <div
        className="location-input"
        style={{ height: visible ? "35px" : "0px" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handlePress}
          placeholder="请输入地址(中文、拼音)"
        />
        <button onClick={handleSubmit}>确定！</button>
      </div>
      <div className="header-time">
        <div className="month-day">
          <div className="month">{date.getMonth() + 1}月</div>
          <div className="day">{date.getDate()}日</div>
        </div>
        <div className="week">{weekday[date.getDay()]}</div>
      </div>
    </div>
  );
}

export default Header;
