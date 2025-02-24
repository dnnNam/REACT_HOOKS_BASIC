import React from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

// khởi tạo 1 interval mỗi lần sau mỗi giây lấy giây hiên tại đi format
// cập nhật lại timeString

function Clock() {
  const { timeString } = useClock();
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;
