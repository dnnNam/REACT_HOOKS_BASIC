import { useEffect, useState } from "react";

function formatDate(date) {
  if (!date) return "";
  // dẩm bảo rằng giờ phút giây luôn à 2 chữ số
  // slide(-2) lấy hai số cuối
  // ví dụ 7 -> 07 slide(-2) vẫn là 07
  // 15 -> 015 slice(-2) là 15
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeString, setTimeString] = useState("");

  // sau mỗi giây cập nhật lại cái String
  useEffect(() => {
    const cloclInterval = setInterval(() => {
      const now = new Date();
      // hh //mm//ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);
    return () => {
      // cleanup
      console.log("clock clean up");
      clearInterval(cloclInterval);
    };
  }, []);
  return { timeString };
}

export default useClock;
