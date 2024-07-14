import { Outlet, useLocation } from "react-router-dom";
import { dynamicLayoutMetadata } from "../utils/url-helper";

const RootLayout = () => {
  const location = useLocation();
  // 현재 위치한 주소를 가지고 올 수 있는 함수

  console.log(location.pathname);

  const metadata = dynamicLayoutMetadata(location.pathname);
  console.log(metadata);

  // Outlet - react-router-dom
  // 하위에 있는 경로를 상위 경로(route)에서 사용하고 싶을 때
  // <RootLayout> router.js </RootLayout>
  // 하위에 있는 router.js 중 "주소에 맞는" 요소를 RootLayout에 전달하여 그대로 보여주는 역할을 합니다

  // 상위 컴포넌트를 만들고 주소에 맞는 하위 컴포넌트들을 전달하는 역할 --> 레이아웃을 만들기 위해

  return (
    <>
      {metadata.header && <header>header</header>}
      <Outlet />
      {/* 
        >> "/" : <Main>
        >> "/todo": <Todo>
      */}
      {metadata.footer && <footer>footer</footer>}
    </>
  );
};
export default RootLayout;
