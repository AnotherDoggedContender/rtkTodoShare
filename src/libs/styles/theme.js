
// 디자인 토큰 (시각적 디자인 원자)
// 디자이너가 정의한 디자인과 관련된 가장 원자적인 값을 일련의 토큰화(값)하여 관리한 것

// 개발자는 이러한 디자인 토큰 혹은 컴포넌트 등을 개발에 적용할 필요가 있는데
// 이를 디자인 시스템이라고 합니다.

// 디자인 시스템을 적용할 때 토큰 값은 디자이너가 정해주는 것

const COLORS = {
    primary: "#00C7AE",
    text: {
        black : '#111111',
        white : '#ffffff'
    },
    Gray: {
        1: "#e9e9e9",
        2: "#d9d9d9",
        3: "#656565"
    }
}

const FONT_SIZE = {
    small: "14px",
    medium: "18px",
    large: "20px"
}

// COLORS, FONT_SIZE를 각각 export해서 사용해도 되지만
// theme으로 객체화 시켜서 export하는 것은 styled-component의
// theme provider를 사용하면 매번 import하지 않아도 자동으로 값이 전달

export const theme = {
    colors: COLORS,
    fontSize: FONT_SIZE
}