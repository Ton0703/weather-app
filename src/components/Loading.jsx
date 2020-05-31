import React, { useState, useEffect } from "react";

function Loading() {
  const [visible, setVisible] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setVisible("block");
    }, 6000);
  }, []);
  return (
    <div className="loading">
      <span>Loading</span>
      <div className="tip" style={{ display: `${visible}` }}>
        如果长时间未响应请检查网络或者输入是否有误！
      </div>
    </div>
  );
}

export default Loading;
