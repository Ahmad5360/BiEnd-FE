import React from "react";
import ReactPaginate from "react-paginate";
export default function Pagination({
  total,
  pageNo,
  setPageNo,
  itemsPerPage = 100,
  handlePageChange = () => {},
}) {
  // const itemsPerPage = 10;
  const pageCount = Math.ceil(total / itemsPerPage);
  const handlePageClick = (event) => {
    handlePageChange(event.selected + 1);
    setPageNo(event.selected + 1);
    // const newOffset = ((event.selected + 1) * itemsPerPage) % total;
  };
  return (
    <div className="pagination-container flex justify-end items-center my-4">
      <ReactPaginate
        className={"pagination"}
        previousClassName={"page-item first-page"}
        previousLinkClassName={`pagination-link ${
          pageNo === 1 ? "disabled" : ""
        }`}
        nextClassName={"page-item last-page"}
        nextLinkClassName={`pagination-link ${
          pageNo === pageCount ? "disabled" : ""
        }`}
        pageClassName={"page-item "}
        pageLinkClassName={"pagination-link"}
        activeLinkClassName={"active-page"}
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        forcePage={pageNo - 1}
      />
    </div>
  );
}
