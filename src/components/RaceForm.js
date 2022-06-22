import React from "react";

const RaceForm = props => {
  return (
      <form className="my-3" onSubmit={props.handleFormSubmit} >
      <div className="row">
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            name="season"
                      placeholder="Season"
                      
          />
        </div>
        <div className="col-12 col-md-4">
          <input
            type="text"
            className="form-control"
            name="round"
            placeholder="Round"
          />
        </div>
        <div className="col-12 col-md-4">
          <input type="submit" className="btn btn-info align-self-center" />
          <button className="btn btn-info align-self-center">
            Get Results
          </button>
        </div>
      </div>
    </form>
  );
};

export default RaceForm;
