// App.js
import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showtextAnimation, setshowtextAnimation] = useState(false);
  

  const handleSubmit = () => {
    // Check if inputValue is not empty before showing the Child component
    if(inputValue === ''){
      alert("Enter something ")
      setshowtextAnimation(false)
     }else{
      //console.log("proceed")
      setshowtextAnimation(true)
    
     }
    
  };

  const updateShowtextAnimation = (newValue) => {
    setshowtextAnimation(newValue);
  };

  return (
    <>
      <div className="box">
        <h1>Enter Your Statement</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="statement"></label>
          <input
            type="text"
            name="statement"
            id="statement"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              
            }}
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {
          <Child inputValue={inputValue} showtextAnimation={showtextAnimation} updateShowtextAnimation={updateShowtextAnimation}/>
        }
        
      </div>
    </>
  );
}

export default App;
