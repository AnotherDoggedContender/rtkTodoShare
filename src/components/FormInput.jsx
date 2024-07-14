/* 

1. props (properties)

    function 상위컴포넌트(){
        const value_1 = "값"
        const value_2 = "값"

        return (
        <div> // 리엑트에서는 요소가 연달아 올 수 없다, wrapper로 감싸줘야함
        <> // Fragment
        <React.Fragment key={index}> // 속성 부여가 가능
            <하위컴포넌트/>
            <하위컴포넌트/>
        </React.Fragment> 
        </>
        </div>
        )
    }


2. 구조분해할당
    -> 자바스크립트에서 데이터의 집단을 나타내는 대표적인 자료구조인 배열과 객체를
    -> 구조를 분해하여 각각의 요소를 변수로 표현하는 과정을 축약

    const seongyong = {
        age: 20,
        height: 190
    }

        const age = seongyong.age
        const height = seongyong.height

        const { age : seongyongAge, height } = seongyong
        객체의 key에 맞는 할당이 이루어져야합니다.

        console.log(age, height) // 20, 190

    const seongyong = [20, 190]
    const [age, height] = seongyong

    => 구조 분해를 할당하는 가장 큰 이유는
       
       객체의 키값을 명시 -> 구성 파악하기 쉽다
       데이터 집단의 값을 키(index,key)뿐만이 아니라 내가 원하는 이름으로 사용
       -> 다른 객체끼리에는 중복되는 키가 존재할 수 있어서 혼돈을 야기할 수 있다
       
3. 나머지 매개변수 연산자
        function a(A, B, C, D, ....){
        }

        function a(A,B, ...rest){
            console.log(rest) {C, D, E, F, G, ...}
        }

        a(1,2,3,4) -> rest // 3,4
        a(1,2,3,4,5,6,7,8,9,10) -> rest // 3,4,5,6,7,8,9,10

*/
import React from "react";
import styled, { css } from "styled-components";

// {label: "이메일", size: 3}
// props는 컴포넌트(함수)의 매개변수로 전달된다
const FormInput = ({
  label,
  size,
  containerStyle,
  error,
  name,
  register,
  ...props
}) => {
  return (
    <>
      <S.InputBox size={size}>
        <S.InputLabel>{label}</S.InputLabel>
        <S.Input size={size} name={name} {...props} {...register?.(name)} />
        {/*나머지 매개 변수 전달을 통한 input의 속성 값 전달*/}
      </S.InputBox>
      <p
        style={{
          visibility: error ? "visible" : "hidden",
          color: "red",
          padding: 0,
          fontSize: 10,
        }}
      >
        {error}
      </p>
    </>
  );
};
export default FormInput;

const sizeCSS = {
  1: css`
    width: 100px;
    height: 30px;
  `,
  2: css`
    width: 300px;
    height: 48px;
  `,
  3: css`
    width: 100%;
    height: 48px;
  `,
};

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* margin-bottom: 16px; */
  // 컴포넌트에 마진을 주면, 마진이 다른 재사용하는 곳에서 재사용이 어렵습니다
  ${(props) => sizeCSS[props.size]}// css 문법
`;

const Input = styled.input`
  border: 1px solid #999;
  border-radius: 4px;
  padding-left: 16px;
  ${(props) => sizeCSS[props.size]} // css 문법
    &::placeholder {
    text-align: center;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
`;

const S = {
  Input,
  InputBox,
  InputLabel,
};

// 다음주 수업까지만 대면 --> 다다음주부터는 비대면
// 30분 전 일찍 열거에요 (9시) >> 대화하는 시간 --> 채팅으로 호응
// 비대면 가장 큰 장점은 종료시간이 정해져있지 않다
// 워케이션 (6주) -- 6월6일 ~ 7월9일
// 1. 티키타카, 수업전후 시간(제가 시간을 조금 더 쓴다)
