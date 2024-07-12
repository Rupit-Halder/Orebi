import RootLayout from "./Components/layout/RootLayout"
import Home from "./Pages/Home"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Product from "./Pages/Product"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import CheckOut from "./Pages/CheckOut"
import Error from "./Pages/Error"
import MyAccount from "./Pages/MyAccount"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Contacts from "./Pages/Contacts"
import About from "./Pages/About"


let router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route  element={<RootLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/checkOut" element={<CheckOut/>}></Route>
        <Route path="/MyAccount" element={<MyAccount/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/LogIn" element={<LogIn/>}></Route>
        <Route path="/Contacts" element={<Contacts/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Route>
      <Route path="/*" element={<Error/>}></Route>
      </>
))

function App() {
  

  return (
    <>
      < RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
