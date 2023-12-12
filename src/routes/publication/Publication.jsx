import React from "react";

const Publication = () => {
  const publications = [];
  return (
    <div>
      <div className="banner">
        <img src="" alt="" />
      </div>

      <div className="pub">
        <h2>Publications</h2>
        {publications.map((publication) => (
          <div className="publication">
            <img src="" alt="" />
            <h3>{publication.title}</h3>
            <p>{publication.description}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>

      <div className="slider"></div>

      <div className="news">
        <h3>Better information, better health</h3>
        <h2>News</h2>
      </div>
    </div>
  );
};

export default Publication;
