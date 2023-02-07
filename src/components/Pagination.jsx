import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./Styles/Pagination.css"

const Pagination = ({ page, setPage, RESIDENTS_PERPAGE, location }) => {
    return (
        <ul className='pagination'>
            <h3>Page: <span>{page}</span></h3>
            {
                numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li className='pagination__item' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
            }
        </ul>
    )
}
export default Pagination