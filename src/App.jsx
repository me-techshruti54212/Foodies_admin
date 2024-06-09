import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AddItems from "./pages/AddItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListItems from "./pages/ListItems";
import OrdersList from "./pages/OrdersList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = import.meta.env.VITE_URL;

  return (
    <>
      <Navbar />
      <ToastContainer />

      <Sidebar />
      <Routes>
        <Route path="/add" element={<AddItems url={url} />} />
        <Route path="/list" element={<ListItems url={url} />} />
        <Route path="/orders" element={<OrdersList url={url} />} />
      </Routes>
    </>
  );
}

export default App;
