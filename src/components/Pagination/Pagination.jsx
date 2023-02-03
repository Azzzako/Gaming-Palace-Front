import React from "react";
import Pagination from 'react-bootstrap/Pagination'
import './Pagination.css'

export const Pages = ({ totalPost, postPerPage, currentPage, setCurrentPage }) => {

    let pages = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    if (currentPage <= 0) setCurrentPage(1)
    if (currentPage > pages.length) setCurrentPage(pages.length)

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="buttons_page">
            <Pagination >
                <Pagination.First
                    onClick={() => (setCurrentPage(1), goToTop())}
                />
                <Pagination.Prev
                    onClick={() => (setCurrentPage(currentPage - 1), goToTop())}
                />
                <Pagination.Next
                    onClick={() => (setCurrentPage(currentPage + 1), goToTop())}
                />
                <Pagination.Last
                    onClick={() => (setCurrentPage(pages.length), goToTop())}
                />
            </Pagination>
        </div>
    )

}
