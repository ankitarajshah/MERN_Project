import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Create from "./pages/Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="/create" Component={Create}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl">React Redux App Crud</h1>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
