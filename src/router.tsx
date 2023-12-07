import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Root from "./pages/Root.tsx";
import { WebComponentSample } from "./pages/WebComponentSample.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/web-component",
    element: <WebComponentSample />,
  },
]);
