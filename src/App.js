import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs/AboutUs";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
