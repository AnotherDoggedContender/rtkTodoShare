import { useState } from "react";

const useInputs = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChangeInputs = (event) => {
    console.log(event.target.value);
    setValue({
      ...value,
      [event.target.name]: event.target.value,
      // input의 name : input value -> 객체
    });
  };

  return [value, onChangeInputs];
};
export default useInputs;
