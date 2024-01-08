import React from "react";

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card">
      <div className="gallery-image">
        <img src={item?.img} alt={item.title} />
      </div>
      <div className="card-body">
        <h3>{item?.title}</h3>
        <div className="props">
          <p>{item?.date}</p>
          <p>{item.category}</p>
        </div>
        <p>{item?.description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
