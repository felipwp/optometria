import React from 'react'
import './styles.css';

export default function Pagination({ dataPerPage, totalData, paginate}) {
    if(totalData === 0) return null;
    const pageNumbers = [];
    
    for( let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => { paginate(number)}} className="page-item">{number}</li>
                ))}
            </ul>
            <span>Mostrando {totalData} resultados</span>
        </nav>
    )
}
