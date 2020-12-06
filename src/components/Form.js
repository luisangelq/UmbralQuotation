import { useState } from "react";
import { getDifferenceYear, calculateBrand, calculatePlan } from "../helper"

import PropTypes from "prop-types"

const Form = ({saveSummary, saveLoading}) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [ error, saveError ] = useState(false)

  //extract values
  const { brand, year, plan } = data;

  //Read form data
  const getDataForm = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //when user hit submit
  const quoteResult = e => {
    e.preventDefault();
    
    if( brand.trim() === "" || year.trim() === "" || plan.trim() === "" ) {
      saveError(true);
      return;
    }
    saveError(false)

    //base cost
    let result = 2000;

    //get difference of years
    const difference = getDifferenceYear(year);
    console.log(difference);
    
     //every year we have to subtract 3%
     result -= ((difference * 3) *result) / 100
     console.log(result);

    //calculate according to brand
    result *= calculateBrand(brand);
    console.log(result);

    //calculate according plan
    result = parseFloat(calculatePlan(plan) * result).toFixed(2);
    console.log(result);

    saveLoading(true)

    setTimeout(() => {

      saveLoading(false)

      saveSummary({
        quote: Number(result),
        data
      })
    }, 2000)
    
  }

  return (
    <form
      onSubmit={quoteResult}
    >
      { error ? <div className="errorForm">All fields are required</div> : null}
      <div className="fieldForm">
        <label className="labelForm">Brand</label>

        <select
          className="selectForm"
          name="brand"
          value={brand}
          onChange={getDataForm}
        >
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="europe">Europe</option>
          <option value="asian">Asian</option>
        </select>
      </div>

      <div className="fieldForm">
        <label className="labelForm">Year</label>

        <select
          className="selectForm"
          name="year"
          value={year}
          onChange={getDataForm}
        >
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </div>

      <div className="fieldForm">
        <label className="labelForm">Plan</label>
        <input
          className="inputRadio"
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getDataForm}
        />
        Basic
        <input
          className="inputRadio"
          type="radio"
          name="plan"
          value="premium"
          checked={plan === "premium"}
          onChange={getDataForm}
        />
        Premium
      </div>

      <button className="btnForm" type="submit">
        Quote
      </button>
    </form>
  );
};

Form.propTypes = {
  saveSummary: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired,
}
export default Form;
