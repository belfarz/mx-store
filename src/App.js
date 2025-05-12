import "./App.css";
import "react-toastify/ReactToastify.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedRoute from "./components/AnimatedRoute";
import Menu from "./components/Menu";
import { ToastContainer } from "react-toastify";
import Update from "./components/Update";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <AnimatePresence mode="wait">
            <AnimatedRoute>
              <Menu />
            </AnimatedRoute>
          </AnimatePresence>
        }
      >
        <Route path="add" element={<Update />}  />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
