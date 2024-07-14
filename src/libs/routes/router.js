import { createBrowserRouter } from "react-router-dom";

import Todo from "../../pages/todo/todo";
import Main from "../../pages/main/main";

import RootLayout from "../../layouts/layout";
// URL을 감지하여 내가 생성한 ROUTE 주소에 맞게 컴포넌트를 전달하는 역할을 한다
// 감지, ROUTE 생성

const router = createBrowserRouter([
  // import { router } from "상대경로"
  // 내가 export한 변수나 함수명을 정확히 기재
  {
    element: <RootLayout />, // 부모
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/todo/:todoId",
        element: <Todo />,
      },
    ],
    // 컴포넌트 태그 형태로 사용해야한다
    // 컴포넌트명은 항상 첫글자가 대문자
  },
]);

export default router;
// import [가지고 올 이름] from "상대경로"
// 가지올이름.createBrowserRouter

// 모듈
// 한가지 이상의 기능을 하는 코드의 집단을 분리한 것
// 코드는 왜 분리했냐? 하나의 js 파일 내부가 아니라 다른 js에서도 파일에서도 사용할 수 있도록

// export -> export default
//        -> export const router = ...
