import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseList from "./pages/course-listing/CourseList";
import CourseDetails from "./pages/course-details/CourseDetails";
import StudentDashboard from "./pages/student-dashboard/StudentDashboard";
import "./Global/Global.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
