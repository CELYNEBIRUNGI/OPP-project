import React from "react";

const Gallery = () => {
  const gallery = [];
  return (
    <div>
      <div className="banner">
        <img src="" alt="" />
      </div>
      <div className="gallery">
        {gallery.map((item) => (
          <div className="gallery-item">
            <img src="" alt="" />
            <div className="gallery-item-info">
              <div>{item.date}</div>
              <div className="gallery-item-title">{item.title}</div>
              <div className="gallery-item-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
