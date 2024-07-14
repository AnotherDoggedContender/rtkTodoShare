/*

1. 컴포넌트 버튼은 variant, size, shape 값을 전달 받습니다
2. variant -> primary, secondary, primary-text
3. size -> small, medium, full
4. shape -> shape, round

5. primary -> 배경 녹색, 글자 흰색
6. secondary -> 배경 파랑색, 글자 흰색
7. "primary-text" -> 글자만 녹색, 배경x

8. small -> padding: 16px
9. medium -> padding: 16px 32px
10. full -> width: 100%, aspect-ratio : 8 / 1

10-1 shape -> radios 8px
     round -> 50%

11. 나머지 매개변수 사용할 것
12. <button>텍스트</button> -> ({children})


ex) 
const TDButton = ({variant, size, shape, children , ...rest}) => {
    return (
        <S.Button
            variant={variant}
            ....
        >
            {children}
            // 해당 컴포넌트가 감싸고 있는 것은 children으로 자동전달
        </S.Button>
    )
}

    <TDButton variant={'primary'} size={'full'} shape={'shape'}>
        회원가입
    </TDButton>
*/

import styled, { css } from "styled-components"


/** 
 @params size: small, medium, full
 size: 디자인 시스템에 등록된 버튼 컴포넌트의 사이즈 값
*/
const TDButton = ({size, shape, variant, children, ...rest}) => {
    return(
        <S.Button
            {...{size, shape, variant}}
            {...rest}
        >
            {children}
        </S.Button>
    )
}
export default TDButton

// variant에 따라 css가 변경 -> varianCSS
const variantCSS = {
    primary: css`
        background-color: #0a540a;
        color: #fff;
    `,
    secondary: css`
        background-color: #4b4be4;
        color: #fff;
    `,
    "primary-text": css`
        color: #0a540a;
        background-color: transparent;
        outline: none;
    `
}

// size에 따라 css가 변경 -> sizeCSS
const sizeCSS = {
    small: css`
        padding: 16px;
    `,
    medium: css`
        padding: 16px 32px;
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1; //가로 8 세로 1
    `
}


// shape에 따라 css가 변경 -> shapeCSS
const shapeCSS = {
    shape: css`
        border-radius: 8px;
    `,
    round: css`
        border-radius: 50%;
    `
}

const Button = styled.button`
        ${(obj)=> variantCSS[obj.variant]}
        ${({size})=> sizeCSS[size]}
        ${(props)=> shapeCSS[props.shape]}
    /* 
        {(props)=> variantCSS[props.variant]}
        {({size})=> sizeCSS[size]}
        {(props)=> shapeCSS[props.shape]}

        <S.Button variant={variant} size={size} shape={shape}>
        </S.Button>
    */
`

const S = {
    Button
}