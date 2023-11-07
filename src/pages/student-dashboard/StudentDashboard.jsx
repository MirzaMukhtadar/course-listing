import React, { useState } from "react";
import "./studentDashboard.css";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [courseData, setCourseData] = useState([
    {
      id: "1",
      img: "https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-734.jpg?size=626&ext=jpg&ga=GA1.1.1405835533.1677740358&semt=sph",
      name: "Javascript",
      instructor: "Alex",
      dueDate: "12th Mar 2023",
      progress: 20,
      completed: false,
    },
    {
      id: "2",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?size=626&ext=jpg&ga=GA1.1.1405835533.1677740358&semt=sph",
      name: "Web Development",
      instructor: "Alex",
      dueDate: "14th April 2023",
      progress: 80,
      completed: false,
    },
    {
      id: "3",
      img: "https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-3877.jpg?size=626&ext=jpg&ga=GA1.1.1405835533.1677740358&semt=sph",
      name: "Front End Development",
      instructor: "Alex",
      dueDate: "01 Dec 2023",
      progress: 35,
      completed: false,
    },
    {
      id: "4",
      img: "https://img.freepik.com/free-vector/react-native-mobile-app-abstract-concept-illustration-cross-platform-native-mobile-app-development-framework-javascript-library-user-interface-operating-system_335657-3350.jpg?size=626&ext=jpg&ga=GA1.1.1405835533.1677740358&semt=ais",
      name: "React native",
      instructor: "Alex",
      dueDate: "10th Jan 2023",
      progress: 50,
      completed: false,
    },
  ]);

  function ProgressBar({ percentage }) {
    const fillStyle = {
      width: `${percentage}%`,
    };

    return (
      <div className="progress-bar">
        <div className="progress-fill" style={fillStyle}></div>
      </div>
    );
  }

  const markCourseAsCompleted = (id) => {
    setCourseData((prevCourseData) =>
      prevCourseData.map((course) => {
        if (course.id === id) {
          return { ...course, completed: true };
        }
        return course;
      })
    );
  };

  return (
    <div className="container">
      <div className="flex-back-button">
        <Link to={"/"}>
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <h1>StudentDashboard</h1>
      </div>
      <h3>Enrolled Courses :</h3>
      <div className="card-flex-courses">
        {courseData.map((data) => (
          <div key={data.id} className="card-enrolled-courses">
            <div className="course_img">
              <img src={data.img} alt="" className="course-thumbnail" />
              <div className="course-name">
                <h2>{data.name}</h2>
                <p>Instructor: {data.instructor}</p>
                <p>Due Date: {data.dueDate}</p>
                <ProgressBar percentage={data.progress} />
                {data.completed ? (
                  <p>Status: Completed</p>
                ) : (
                  <button
                    className="main-button"
                    onClick={() => markCourseAsCompleted(data.id)}
                  >
                    <i className="fa-regular fa-circle-check"></i> Mark as
                    Completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
