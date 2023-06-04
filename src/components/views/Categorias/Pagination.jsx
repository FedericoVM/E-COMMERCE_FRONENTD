const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className='container d-flex justify-content-center'>
      <nav className="d-flex justify-content-center mt-3">
      <ul className='pagination'>
      <li className='page-item' disabled={currentPage <= 1 ? true : false}>
            <button onClick={() => paginate(currentPage - 1)}  disabled={currentPage <= 1 ? true : false} className='page-link'>
              {"<"}
            </button>
          </li>
          <li className={currentPage <= 1 ? 'd-none' : 'page-item'}>
            <a onClick={() => paginate(currentPage - 1)} className='page-link'>
              {currentPage - 1}
            </a>
          </li>
          <li className='page-item'>
            <a onClick={() => paginate(currentPage)} className={currentPage? 'active page-link':'page-link'}>
              {currentPage}
            </a>
          </li>
          <li className={currentPage >= pageNumbers.length ? 'd-none' : 'page-item'}>
            <a onClick={() => paginate(currentPage + 1)} className='page-link'>
              {currentPage + 1}
            </a>
          </li>
          <li className='page-item' disabled={currentPage >= pageNumbers.length ? true : false}>
            <button onClick={() => paginate(currentPage + 1)}  disabled={currentPage >= pageNumbers.length ? true : false} className='page-link'>
              {">"}
            </button>
          </li>
      </ul>
    </nav>
    </div>
    )
}

export default Pagination