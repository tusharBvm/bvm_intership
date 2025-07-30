import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function reducer(state, action) {
  // console.log("state ==>",state);
//   console.log("action ==>",action);

  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
}
throw Error('Unknown action: ' + action.type)
}

const initialState = { name: "Tushar", age: 22 };

function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function hadleBuutonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <>
      <input type="text" onChange={handleInputChange} value={state.name} />
      <br />
      <br />
      <button onClick={hadleBuutonClick}>Increcrese Age</button>
      <p>Hello , {state.name}. you Are {state.age}</p>
    </>
  );
}

export default FormReducer;
