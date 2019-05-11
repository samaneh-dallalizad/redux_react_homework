import * as React from 'react'
import PropTypes from "prop-types";

function modelDetails(props){
  return (
        <div className="ModelDetails">
            <ul>
               <li>Name: {props.model.name}</li>
               <li>Manufacturer: {props.model.manufacturer}</li>
               <li>Year: {props.model.year}</li>
               <li>Origin: {props.model.origin}</li>
           </ul>
        </div>
    );
}
modelDetails.propTypes = {
    model: PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        manufacturer: PropTypes.string.isRequired,
        origin: PropTypes.string.isRequired

    })
  };
export default modelDetails;