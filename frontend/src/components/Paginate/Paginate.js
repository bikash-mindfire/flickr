import React from 'react'
import './Paginate.scss'
const Paginate = ({handlePageDown, handlePageUp, lastpage, loading}) => {
    return (
        <div className="pagination">
            {!loading ? <><button onClick={handlePageDown}>-</button>
          <button>{lastpage}</button>
          <button onClick={handlePageUp}>+</button></>: 
          <button>Loading...</button>
          }
        </div>
    )
}

export default Paginate
