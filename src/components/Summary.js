import PropTypes from "prop-types";

const Summary = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <div className="summaryContent">
      <h2>Quote Summary</h2>

      <ul>
        <li>Brand: {brand.toUpperCase().slice(0, 1) + brand.slice(1)}</li>
        <li>Year: {year} </li>
        <li>Plan: {plan.toUpperCase().slice(0, 1) + plan.slice(1)}</li>
      </ul>
    </div>
  );
};

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
export default Summary;
