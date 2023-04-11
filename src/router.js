import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFoundPage from "./components/NotFoundPage";
import Counter from "@/components/common/Counter";
import Calculator from "@/components/common/Calculator";
import LiveClock from "@/components/common/LiveClock";
import TodoList from "@/components/common/ToDoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/calculator",
                element: <Calculator />,
            },
            {
                path: "/live-clock",
                element: <LiveClock />,
            },
            {
                path: "/to-do-list",
                element: <TodoList />,
            },
            {
                path: "/counter",
                element: <Counter />,
            },
        ],
    },
]);
export default router;
