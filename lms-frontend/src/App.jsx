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

import AddModuleMain from "./components/AddCourse/AddModuleMain";
import AdminHome from "./components/Admin/AdminHome";
import Assessment from "./components/Assessment/Assessment";
import AssessmentStart from "./components/Assessment/AssessmentStart";
import AdminCourses from "./components/Admin/AdminCourses";
import StudentList from "./components/Admin/EnrollToCourse";
import AllCourses from "./components/AllCourses";
import User from "./components/Admin/User";
import UserProgress from "./components/Admin/UserProgress";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
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
            path="/courseContent/:UCID/:cName/:cId"
            element={<CourseContent></CourseContent>}
          ></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/madd" element={<ModuleForm />}></Route>
          <Route path="/courseAdd" element={<AddModuleMain />}></Route>
          <Route path="/Admin" element={<AdminHome />}></Route>
          <Route path="/Assessment/:cId/:UCID" element={<AssessmentStart />}></Route>
          <Route path="/AdminCourses" element={<AdminCourses />}></Route>
          <Route path="/enroll-to-course/:courseId" element={<StudentList />}></Route>
          <Route path="/all-courses" element={<AllCourses />}></Route>
          <Route path="/users" element={<User />}></Route>
          <Route path="/user-progress/:userId" element={<UserProgress />}></Route>

         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
