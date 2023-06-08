const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
    <nav className="d-flex justify-content-center mt-3">
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a onClick={() => paginate(number)} className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  </div>
  )
}

export default Pagination