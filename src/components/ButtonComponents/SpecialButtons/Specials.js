import React, {useState} from "react";
import {specials} from "../../../data";
import {SpecialButton} from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specArray,setSpecArray] = useState(specials)

  return (
    <div className='special'>
      {specArray.map((item,index)=>(
        <SpecialButton key={index} value={item}/>
      ))}
    </div>
  );
};
