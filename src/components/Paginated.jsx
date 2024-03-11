import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GalleryCard from "./cards/GalleryCard";

const Paginated = ({ items, itemsPerPage }) => {
  const location = useLocation();
  const totalPages = Math.ceil(items?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(() => 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    goToPage(1);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return (
    <div className="page-container">
      <ul className="list">
        {items?.slice(startIndex, endIndex).map((item) => (
          <GalleryCard key={item.id} item={item} />
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
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Paginated;
