import React from "react";

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    
return (
    <div className="pagination">
        <button className="pagination-btn" onClick={onLeftClick}>
            <div className="icon"> 👈 </div></button>
            <div> {page} de {totalPages} </div>
        <button className="pagination-btn" onClick={onRightClick}>
            <div className="icon"> 👉 </div></button>
        </div>
    );
};

export default Pagination;