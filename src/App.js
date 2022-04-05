import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Blog/Blog";
import Dashboard from "./Dashboard/Dashboard";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Reviews from "./Reviews/Reviews";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
