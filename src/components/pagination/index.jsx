import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};
function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);
  // tính số lượng trang giả dụ có 50 sản phẩn chia giới hạn mỗi trang
  // và chỉ lấy phần nguyên
  // 51/10 = 5.1 -> 6 trang .cell lấy phần up
  function handlePageChange(newPage) {
    onPageChange(newPage);
  }
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Prev
      </button>

      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
