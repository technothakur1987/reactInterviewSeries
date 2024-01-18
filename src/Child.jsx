// Child.js
import React, { useState, useEffect, memo } from "react";
import "./App.css";

const Child = ({ inputValue, showtextAnimation, updateShowtextAnimation }) => {
  let [word, setword] = useState("");
  let [counter, setcounter] = useState(0);
  console.log("show text animation " + showtextAnimation);
  useEffect(() => {
    if (inputValue !== "" && showtextAnimation === true) {
      console.log('Input value is '+ inputValue);
      let str = inputValue.trim();
      let wordarray = str.split(" ");
      console.log(wordarray);
      let interval = setInterval(() => {
        if (counter < wordarray.length) {
          console.log("WORD IS " + wordarray[counter]);
          //setword(`${wordarray[counter]}`)
          setword((prevword) => `${wordarray[counter]}`);
          setcounter((prevCounter) => prevCounter + 1);
        } else {
          
          setword((prevword) => '');
          if(word === ''){
            console.log('word is empty')
            updateShowtextAnimation(false);
            setcounter((prevCounter) => prevCounter - prevCounter);

          }else{
            console.log('word is not empty')
          }
          
          
          clearInterval(interval);
        }

        // if (counter === wordarray.length) {
        //   clearInterval(interval);
        // }
      }, 2000);

      return () => {
        clearInterval(interval); // Cleanup on unmount
      };
    }
  }, [inputValue ,word, showtextAnimation]);

  return (
    <div className="children">
      <h1>{word}</h1>
    </div>
  );
};

export default memo(Child);
