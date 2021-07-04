import React from "react";
import PropTypes from "prop-types";
import scenary from "../Assets/scenary.png";
function Title(props){
  //const name="Garikipti Jahnavi";
  //const leadText="I am a freelancer developer";
  const{name,leadText}=props;
    return ( 
        <div className="container">
          <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid rounded-circle w-75"
                src={scenary}
                alt="your name"
              />
            </div>
            <div className="col-12 col-md-6 pt-5">
        <div className="font-weight-light" style={{fontSize: "50px"}}>
          Hi, I am <span className="text-info">{name}</span>
        </div>
                <h4 className="font-weight-light">{leadText}</h4>
            </div>
          </div>
        </div>)
}
//DEFAULT PROPS is used to print a default value in case of not declaring props in app.js

Title.defaultProps={
  name:"Jahnavi Garikipati",
  leadText:"I'm a freelancer from India",
}
//since it is string and name given in app.js is also a string there will be no error. 
//if we write object here instead of string error will be as object expected
//this is used to clear bugs easily
Title.propTypes={
  name:PropTypes.string.isRequired,
};
export default Title;