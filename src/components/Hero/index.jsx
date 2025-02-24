import React from "react";
import PropTypes from "prop-types";

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: "",
};
// nhân 1 cái prop là name
// có 1 console log thì mỗi lần render nó in ra
function Hero(props) {
  const { name } = props;
  console.log("Hero Render: ", name);

  return <div>Hero Name: {name}</div>;
}

// nếu như bạn muốn prop không thay đổi thì không re-render nữa thì
// dùng REACT.memo() nhưng nếu như prop có hàm thì nó sẽ bị re-render
// tại khi thay đổi state thì cha sẽ re-rend tạo ra object mới
// thế nên nó sẽ so sánh obj 1 với obj 2 thay đổi nên mình dùng useCallBack và useMemo
// chỉ dùng hoc khi không muốn re-render như đồ thị vì nó rất là nặng

export default React.memo(Hero);

// nếu mình dùng  export default Hero thì nếu thay đổi state bên cha nó sẽ
// render lại còn REACT.MEMO thì không
// export default Hero;
