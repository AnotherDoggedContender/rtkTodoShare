import { http, HttpResponse } from "msw";

export const login = http.post("/api/user/login", async ({ request }) => {
    //todo?todoId=3&userId=2
    const url = new URL(request.url);
    const { todoId, userId } = url;
    console.log(todoId, userId);
    //api/user/login/:todoId
    //const {todoId} = request.params
    const { email, password } = await request.json();

    if (email !== "test@test.com" || password !== "testtest")
        return new HttpResponse(null, {
            status: 400,
        });
    return HttpResponse.json({
        token: "token", //실제 환경에서 token은 출입증 역할, 사용자들의 고유값이 암호화 된 값
        status: 200,
    });
});
