import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./courseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const course = useSelector((state) =>
    state.course.courseList.find((c) => c.id === id)
  );

  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);

  if (!course) {
    return <p>Course not found.</p>;
  }

  //setting Image opacity and BG Image
  const imageStyle = {
    backgroundImage: `url(${course.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.7,
  };
  return (
    <div>
      {/* Add more details here */}
      <div className="container">
        <div className="flex-back-button">
          <Link to={"/"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <h1>Course Detail</h1>
        </div>
        <div className="flex-course-content" style={imageStyle}>
          <div className="flex-course-details">
            <div className="course-info">
              <div className="selected-course-name">
                <h2>{course.name}</h2>
                <h4>{course.description}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="course-other-details">
          <p>Status : {course.enrollmentStatus}</p>
          <p>Duration : {course.duration}</p>
          <p>{course.schedule}</p>
          <p>Mode : {course.location}</p>
        </div>
        <h2>Students which are enrolled in this course</h2>
        <div className="flex-student-card">
          {course.students.map((student) => (
            <div className="student-card">
              <i className="fa-solid fa-circle-user"></i>
              <p key={student.id}>{student.name}</p>
            </div>
          ))}
        </div>
        <h3>Prerequisites :</h3>
        <div className="prerequisites-card">
          <ol>
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>
                <p>{prerequisite}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="syllabus">
          <h3>What Will you learn : </h3>
          <p>Expand the button to view the syllabus.</p>
          <button
            onClick={() => setSyllabusExpanded(!isSyllabusExpanded)}
            className="main-button"
          >
            {isSyllabusExpanded ? "▼ " : "▶ "}
            {isSyllabusExpanded ? "Collapse" : "Expand"}
          </button>
          {isSyllabusExpanded && (
            <div className="syllabus-card">
              <ul>
                {course.syllabus.map((item, index) => (
                  <li key={index}>
                    <strong>Week {item.week}:</strong>{" "}
                    <p>
                      {item.topic} - {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default CourseDetails;
