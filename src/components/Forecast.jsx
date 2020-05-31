import React from "react";

let day = new Date().getDay() + 2;
const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const date = ["今天", "明天", weekday[day]];

function Forecast({ data }) {
  const list = data.map(({ cond_code_d, tmp_max, tmp_min }) => ({
    cond_code_d,
    tmp_max,
    tmp_min,
  }));
  return (
    <div className="forecast">
      <div className="forecast-list">
        {list.map((item, index) => (
          <div className="daily" key={index}>
            <div className="date">{date[index]}</div>
            <div className="daily-icon">
              <img
                src={`/cond-icon-heweather/${item.cond_code_d}.png`}
                alt=""
              />
            </div>
            <div className="temp">
              <span className="min">{item.tmp_min}</span>/
              <span className="max">{item.tmp_max}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
