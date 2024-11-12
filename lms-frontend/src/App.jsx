import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
// import './index.css'
import DashBoard from "./components/DashBoard";
import Sidebar from "./components/SideBar";
import ModuleSidebar from "./components/ModuleSIdebar";
import ContentViewer from "./components/ContentViewer";
import CourseContent from "./components/CourseContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule";
import RegisterPage from "./components/register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DashBoard></DashBoard>     */}
      {/*      
       <ContentViewer></ContentViewer> 
       <CourseContent></CourseContent> */}
      {/* <UserSignUpPage></UserSignUpPage> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/courseContent"  element={<CourseContent></CourseContent>}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>


          {/* <Route path="/" element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
