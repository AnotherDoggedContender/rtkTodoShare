import { http, HttpResponse } from "msw";

export const addTodo = http.post("/api/todo", async ({ request }) => {
    //input: title, content-> body
    const { title, content } = await request.json();

    return HttpResponse.json({
        status: 200,
        data: {
            id: Math.floor(Math.random() * 100000),
            title,
            content,
            state: false,
        },
    });
});
export const getTodos = http.get("/api/todo", async () => {
    return HttpResponse.json({
        status: 200,
        data: [
            {
                id: 1,
                title: "example-1",
                content: "content-1",
                state: false,
            },
        ],
    });
});
export const updateTodo = http.patch();
