import React from "react";

export const Pagination = ({totalPost, postPerPage, setCurrentPage}) => {

    let pages = []
    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
    }


    return (
        <div>
            {pages.map((page,index) => {
                return <button className="button" key={index} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )

}
