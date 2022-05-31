import * as React from "react";

const Paginations = ({ cardsPerPage, total, paginate }) => {
  console.log("TOTAL>>", total);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button className="pagiButton" onClick={() => paginate(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginations;
