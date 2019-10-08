import React from "react";
import {Operators} from "./Operators";

export const OperatorButton = (props) => {
  return (
    <>
    <button>
      {props.object.char}
    </button>
    </>
  );
};
