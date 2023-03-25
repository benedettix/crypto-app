import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar/SideBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";

function App() {
  // const dispatch = useDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
