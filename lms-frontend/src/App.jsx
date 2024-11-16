import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
// import './index.css'
import DashBoard from "./components/DashBoard";
import Sidebar from "./components/SideBar";
// import ModuleSidebar from "./components/ModuleSIdebar";
import ContentViewer from "./components/ContentViewer";
import CourseContent from "./components/CourseContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule";
import RegisterPage from "./components/register/Register";
import HomePage from "./components/HomePage";
import Feedback from "./components/Feedback";
import ModuleForm from "./components/ModuleForm";
import CourseForm from "./components/AddCourse/CourseForm";
import AddModuleMain from "./components/AddCourse/AddModuleMain";

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
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/feedback/:UCID" element={<Feedback />}></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route
            path="/courseContent/:UCID/:cName"
            element={<CourseContent></CourseContent>}
          ></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/madd"  element={<ModuleForm />}></Route>
          <Route path="/courseAdd"  element={<AddModuleMain/>}></Route>
          {/* <Route path="/" element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
