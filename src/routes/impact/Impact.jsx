import React from "react";

const Impact = () => {
  const articles = [];
  return (
    <div>
      <div className="banner">
        <img src="" alt="" />
        <h1>Changing lives of Uganda</h1>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <div className="article">
            <img src="" alt="" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>

      <div className="more">
        <h2>More articles</h2>
        <p></p>
        <ul>
          {articles.map((article) => (
            <li>
              <img src="" alt="" />
              <h3>{article.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="status">
        <h2>Status of Implementation</h2>
        <p></p>

        <h2>Slider goes here</h2>
      </div>
    </div>
  );
};

export default Impact;
