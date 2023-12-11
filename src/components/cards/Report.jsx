const Report = ({ image, text, alt }) => {
  return (
    <div className="report-card">
      <img src={image} alt={alt ? alt : "card"} />
      <p>{text}</p>
    </div>
  );
};

export default Report;
