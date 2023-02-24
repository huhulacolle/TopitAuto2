import { createHashRouter, RouterProvider,  } from "react-router-dom";
import Home from "./components/Home";
import Root from "./components/Root";
import Update from "./components/Update";

export default function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'update',
          element: <Update />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}
