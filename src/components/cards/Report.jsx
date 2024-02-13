const Report = ({ image, text, alt, file }) => {
  return (
    <div className="report-card">
      <a href={file} download={text} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt ? alt : "card"} />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default Report;
