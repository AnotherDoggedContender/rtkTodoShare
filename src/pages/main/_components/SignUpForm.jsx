import { useForm } from "react-hook-form";
import TDButton from "../../../components/Button";
import FormInput from "../../../components/FormInput";
import { Form } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
// * <-- 무엇이든 as(별명) yup으로

const SIGNFORM_ARRAY = [
  {
    label: "이메일",
    size: 3,
    name: "email",
    option: {
      placeholder: "이메일을 입력해주세요",
    },
  },
  {
    label: "비밀번호",
    size: 3,
    name: "password",
  },
  {
    label: "비밀번호 확인",
    size: 3,
    name: "password-confirm",
  },
];

// 데이터의 유효성 검사를 위한 조건을 쉽게 작성 ===> yup
const signFormSchema = yup.object().shape({
  email: yup.string().email("이메일 양식이 아닙니다").required(),

  password: yup
    .string()
    .min(8, "비밀번호는 8글자 이상 입력해주세요")
    .required(),

  "password-confirm": yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호 확인이 일치하지 않습니다")
    .required(),
});

const SignUpForm = ({ setFormState }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    // watch
  } = useForm({
    mode: "onChange",
    // 정규표현식 없이, 혹은 데이터의 유효성을 검사하기 위한 제약조건 >> yup(js), zod(ts)
    resolver: yupResolver(signFormSchema),
  });

  const onSubmitSignUp = (data) => {
    alert(`${data.email}님 환영합니다`);
    setFormState("SIGN-IN");
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmitSignUp)}>
      {SIGNFORM_ARRAY.map((form) => (
        <FormInput
          key={form.name}
          size={form.size}
          label={form.label}
          register={register}
          name={form.name}
          placeholder={form.option?.placeholder}
          // onChange={onChangeInputs}
          error={errors[form.name]?.message}
          // errors[form.name] ? errors[form.name].message : undefined
        />
      ))}
      <TDButton size={"full"} variant={"primary"} disabled={!isValid}>
        회원가입
      </TDButton>
    </S.Form>
  );
};

const S = {
  Form,
};

export default SignUpForm;

// styled-components
// scss + post.css // app.module.scss -> 러닝커브 + 퍼블리셔분들이랑 쉽게 소통
// emotion // styled-components랑 사용법이 완전히 같습니다 - css-in-js - 편해요

// tailwind-css // nextjs 스타트업
// vanilla extract, styleX
//                  ------ meta
