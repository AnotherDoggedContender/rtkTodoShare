import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./libs/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";
import { store } from "./store/todo.rtkStore";
import { Provider } from "react-redux";
import { server } from "./mocks/server";
if (process.env.NODE_ENV === "development") server.start();
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
        // 컴포넌트
    );
}
export default App;
