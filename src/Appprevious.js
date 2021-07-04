import React, {Component} from "react";
import './App.css';
 //Jsx: JavaScript XML
//Extension of js
//Adds html-like markup inside js. 
//Jsx is not html. It's a html like syntax. 
//Not supportes by browsers (it's compiled to js)
//Class=> className(camelCase). 
//for, onclick, onchange =>htmlFor, onClick, onChange etc. 
//Should return only one element. 
//Closing tag is compulsory. 
//Js expressions inside {}. Css inside{{}}.

function App() {
  let a=30;
  let b=20;
  let name="jahnavi";
  let obj={
    age:18,
    gender:"female",
    branch:"cse",
    sec:"b",
    
  }
  //customStyle is same as style in css
  //const customStyle={
    //color: "green",
    //backgroundColor: "yellow",
  //};
  
  // return (
  //<div className="App">
  //<h1 style={customStyle}>portfolio website {a+b} {name} {obj.age}{" "}{obj.gender}{"        "}{obj.branch}{" "+" "+" "+" "}{obj.sec}</h1>
    //</div>);

    //or

      //return (
    //<div className="App">
    // <h1 style={{color: "green",backgroundColor: "yellow"}}>portfolio website {a+b} {name} {obj.age}{" "}{obj.gender}{"        "}{obj.branch}{" "+" "+" "+" "}{obj.sec}</h1>
    
   // </div>);

   //or
   
   //by using class
   return (
    <div className="App">
    <h1 className="customStyle">portfolio website {a+b} {name} {obj.age}{" "}{obj.gender}{"        "}{obj.branch}{" "+" "+" "+" "}{obj.sec}</h1>
      </div>);
    
    
}
function App1() {
  return React.createElement(
    "div",
    {className: "App1"},
    React.createElement("h1",null,"First--heading")
    
  );
}

//Class component:
class App3 extends Component{
render(){
  return(
    <div className="App3">Class Component</div>
  )
}

}




export default App3;
