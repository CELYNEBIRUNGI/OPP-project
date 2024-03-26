import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PubCard from "./cards/PubCard";

const PagedPubs = ({ items, itemsPerPage }) => {
  const totalPages = Math.ceil(items?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const [pubs, setPubs] = useState([]);
  const [loadPage, setLoadPage] = useState(false);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    goToPage(1);
  }, []);

  useEffect(() => {
    setLoadPage(true);
    const timeoutId = setTimeout(() => {
      setPubs(items?.slice(startIndex, endIndex));
      setLoadPage(false);
    }, 600);
    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  return (
    <div className="dotted-container">
      <ul className="dotted-list">
        {loadPage && (
          <div className="load-page">
            <h1>Loading...</h1>
          </div>
        )}
        {pubs.map((article) => (
          <li key={article.id}>
            <PubCard article={article} />
          </li>
        ))}
      </ul>

      <div className="page-numbers">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToPage(index + 1);
            }}
            className={index + 1 === currentPage ? "active" : ""}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PagedPubs;
