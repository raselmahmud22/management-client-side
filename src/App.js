import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Blog from "./Components/Pages/Blog/Blog";
import Inventory from "./Components/Pages/Inventory/Inventory";
import MyOrder from "./Components/Pages/MyOrder/MyOrder";
import NotFound from "./Components/Common/NotFound/NotFound";
import Registration from "./Components/Pages/GetStart/Registration";
import React from "react";
import LogIn from "./Components/Pages/GetStart/LogIn";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Components/Pages/Home/ProductDetails/ProductDetails";
import AuthRequired from "./Components/Common/AuthRequired/AuthRequired";
import ManageInventory from "./Components/Pages/ManageInventory/ManageInventory";
import AddInventoryItem from "./Components/Pages/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/order" element={<MyOrder />}></Route>
        <Route path="/getStart" element={<LogIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route
          path="/productDetails/:id"
          element={
            <AuthRequired>
              <ProductDetails />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/manageInventory"
          element={
            <AuthRequired>
              <ManageInventory />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/add-inventory-item"
          element={
            <AuthRequired>
              <AddInventoryItem />
            </AuthRequired>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
