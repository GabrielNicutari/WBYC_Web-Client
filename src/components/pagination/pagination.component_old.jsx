import React , { useState, useRef }from 'react';
import './pagination.styles.scss';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];

    const [position, setPosition] = useState(0);

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNr, position) => {
        paginate(pageNr);
        // let position = pageNr.nativeEvent.offsetX;
        console.log(position);
        console.log(this.refs.inner.clientHeight);

    }

    var slider = {
        // position: position
        backgroundColor: "blue",
        left: position + 15
    }

    return (
        <nav className='nav-container'>
            <ul className="pagination-container">
                <div className="slider" style={slider}/>
                {pageNumbers.map(pageNr => (
                    <li key={pageNr} className="page-item">
                        <a onClick={(e) => {
                            handleClick(pageNr, position);
                        }} ref = "inner"
                         href="#" className="page-link">
                            <span>{pageNr}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;