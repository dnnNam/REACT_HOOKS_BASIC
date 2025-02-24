import React from "react";
import useClock from "../hooks/useClock";
import "./BetterClock.scss";
BetterClock.propTypes = {};

// khởi tạo 1 interval mỗi lần sau mỗi giây lấy giây hiên tại đi format
// cập nhật lại timeString

function BetterClock() {
  const { timeString } = useClock();
  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
