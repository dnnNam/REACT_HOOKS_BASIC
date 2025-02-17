import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  // hàm Math.Ramdom sẽ luôn return về một con số  thập phân từ 0 đến 1
  // mình sẽ nhân cho 5 mà dùng hàm trunc để lấy phần nguyên
  // sẽ ra từ 0 đến 4
  return COLOR_LIST[randomIndex];
};

function ColorBox() {
  //  vì thằng initial chỉ chạy trong lần đầu tiên thôi nên mình bỏ
  // dô callBack
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    // nếu không có sẽ là deeppink
    return JSON.parse(initColor);
  });
  function handleBoxClick() {
    // get ramdom color ---> set color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", JSON.stringify(newColor));
  }

  return (
    <div
      className="color-Box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
