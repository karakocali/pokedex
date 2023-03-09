import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Routers } from "./routers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {" "}
      {Routers.map((e, i) => (
        <Route
          key={i}
          path={e.path}
          element={e.element}
          loader={e.loader ?? null}
        ></Route>
      ))}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider  router={router}></RouterProvider>
    </>
  );
}

export default App;
