import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.propTypes = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);
  // useRef giúp mình tạo ra thằng object và nó sẽ không thay đổi giữa những lần render
  function handleSearchTermChange(e) {
    const value = e.target.value;
    // tạo biến tạm nếu không bỏ trong settimeout nó sẽ bị release

    setSearchTerm(value);
    if (!onSubmit) return; // nếu như không có thì dừng

    //mỗi lần chúng ta gõ chúng ta cần xóa đi cái timeout trước đó
    // giả dụ ban đầu nó gõ 100 , nhưng sau nó gõ nữa thì nó sẽ gọi 300
    // thê nên xóa thằng đầu tiên đi
    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    // set giá trị cho thằng typing
    typingTimeOutRef.current = setTimeout(() => {
      onSubmit({ searchTerm: value });
    }, 300);
    // bạn cứ gõ đi tui đợi 300 second , nếu tiếp tục gõ vẫn đợi
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;
