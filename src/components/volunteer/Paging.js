import React from "react";
import Pagination from "react-js-pagination";
import "./Paging.module.css";

const Paging = ({page, totalCount, postPerpage, pageRangeDisplayed, handlePageChange}) => {
    return(
        <Pagination
                activePage={page}
                totalItemsCount={totalCount ? totalCount : 0}
                itemsCountPerPage={postPerpage}
                pageRangeDisplayed={pageRangeDisplayed}
                onChange={handlePageChange}/>
    );
}

export default Paging;