// 훅함수를 사용하지 않는 재사용 함수 (validate 관련, main page에서만 쓰는)

export function validateSignForm({ email, password, passwordConfirm }) {
  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 8;
  const isValidPasswordConfirm = password === passwordConfirm;

  return {
    isValidEmail,
    isValidPassword,
    isValidPasswordConfirm,
  };
}
