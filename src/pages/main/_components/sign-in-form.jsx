import styled, { css } from "styled-components";
import FormInput from "../../../components/FormInput";
import TDButton from "../../../components/Button";
import { Form } from "./style";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// npm i yup @hookform/resolvers
import * as yup from "yup";

// yup은 제약조건을 쉽게 만든다 (유효성 검사 조건을 쉽게 생성)
const singInFormSchema = yup.object().shape({
    email: yup.string().email("이메일 양식이 일치하지 않습니다").required(" "),
    password: yup
        .string()
        .min(8, "비밀번호는 8글자 이상이어야합니다.")
        .required(),
});

const SignInForm = () => {
    const navigate = useNavigate();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(singInFormSchema),
    });

    const handlePressSignIn = async (data) => {
        try {
            const response = await fetch("/api/user/login", {
                //await: promise가 나올 때 까지 기다린다.
                method: "post",
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            }).then((res) => {
                return res;
            });
            console.log(response);
            if (response.status === 200) {
                navigate("/todo/3");
            }
            if (response.status === 400) {
                alert("아이디와 비밀번호를 확인해주세요");
            }
        } catch (err) {
            console.log(err);
            alert("아이디, 비밀번호 확인");
        }
    };

    return (
        <S.Form onSubmit={handleSubmit(handlePressSignIn)}>
            <FormInput
                label={"이메일"}
                placeholder={"email"}
                size={2}
                name="email"
                register={register}
                error={errors.email?.message}
            />
            <FormInput
                label={"비밀번호"}
                size={1}
                containerStyle={css`
                    width: 100px;
                `}
                name="password"
                register={register}
                error={errors.password?.message}
            />

            {/* 스타일 가이드/디자인 시스템 -> 정해진 값으로 컴포넌트를 빠르게 생산 */}
            <TDButton variant={"secondary"} size={"medium"} disabled={!isValid}>
                로그인
            </TDButton>
        </S.Form>
    );
};
export default SignInForm;

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
    width: 100%;
`;

const Input = styled.input`
    border: 1px solid #999;
    width: 100%;
    border-radius: 4px;
    padding-left: 16px;
    height: 48px;
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
    Form,
    InputBox,
    InputLabel,
    Input,
};
