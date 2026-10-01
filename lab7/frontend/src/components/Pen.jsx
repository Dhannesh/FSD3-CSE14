const Pen = (props) => {
  const { picUrl, company, price } = props.pen;
  return (
    <div className="book">
      <img src={picUrl} alt={company} />
      <h3>{company}</h3>
      <h4>Rs. {price}</h4>
    </div>
  );
};
export default Pen;
