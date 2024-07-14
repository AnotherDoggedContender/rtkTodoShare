// custom hook은 앞에 반드시 use로 시작할 것

import { useState } from "react";

// 컴포넌트가 아니기 때문에 앞에 대문자 아니어도 상관 없습니다
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
  // 구조분해할당 할 때 쉽게 이름을 변경하기 위해서 배열로 반환
};
export default useInput;
