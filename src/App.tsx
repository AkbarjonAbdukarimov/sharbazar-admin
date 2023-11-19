import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products/Products";
import Category from "./components/pages/Categories/Category";

import axios from "axios";
import EditCategory from "./components/pages/Categories/EditCategory";

import Admins from "./components/pages/Admins/Admins";
import NewAdmin from "./components/pages/Admins/NewAdmin";
import EditAdmin from "./components/pages/Admins/EditAdmin";
import Product from "./components/pages/Products/Product";

import { backend } from "./URLS";
import MenuAppBar from "./components/Navbar/AppBar";
import ProductImageForm from "./components/pages/Products/ProductImageForm";
import IAdmin from "./interfaces/IAdmin";
import AdminContext from "./context/AdminContext";

export default function App() {
  const [admin, setAdmin] = useState<IAdmin | undefined>({
    email: "test",
    token: "someToken",
  });

  axios.defaults.baseURL = backend + "api";

  axios.defaults.headers.common["Authorization"] = admin && admin.token;

  return (
    <div>
      <AdminContext.Provider value={{ admin, setAdmin }}>
        
        <div className="mt-5 pt-5">
          <BrowserRouter>
          <MenuAppBar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route
                path="/products/image/:id"
                element={<ProductImageForm />}
              />
              <Route path="/products/:id" element={<Product />} />

              <Route path="/admins" element={<Admins />}></Route>
              <Route path="/admins/new" element={<NewAdmin />}></Route>
              <Route path="/admins/edit/:id" element={<EditAdmin />}></Route>

              <Route path="/categories/edit/:id" element={<EditCategory />} />
              <Route path="/categories/:id" element={<Category />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AdminContext.Provider>
    </div>
  );
}
