import { useState } from "react";
import { NavLink } from "react-router-dom";

const Pagineted = ({ items, itemsPerPage }) => {
  const totalPages = Math.ceil(items?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container">
      <ul className="product-list">
        {currentItems.length ? (
          currentItems.map((item) => (
            <li key={item.id} className="product">
              <NavLink
                to={`/products/${item.id}`}
                className="product-link"
                initial="start"
                hover="hover"
              >
                <h2 className="product-name">{item.name}</h2>
                <img
                  src={phone}
                  alt="product"
                  className="product-image"
                  loading="lazy"
                />
              </NavLink>
              <div className="product-footer">
                <button
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                >
                  Add to cart
                </button>
                <span className="product-price">${item.price}</span>
              </div>
            </li>
          ))
        ) : (
          <h2>No items</h2>
        )}
      </ul>

      <div className="page-numbers">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              goToPage(index + 1);
            }}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagineted;
