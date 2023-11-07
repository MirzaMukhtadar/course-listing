import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setFilteredCourseList,
} from "../../redux/slices/searchSlice";
import { setCourseList } from "../../redux/slices/courseSlice";
import { db } from "../../firebase/firebaseConne";
import { getDocs, collection } from "firebase/firestore";
import "./courseList.css";
import { Link } from "react-router-dom";

function CourseList() {
  const courseList = useSelector((state) => state.course.courseList);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredCourseList = useSelector(
    (state) => state.search.filteredCourseList
  );
  const dispatch = useDispatch();

  const coursesCollection = collection(db, "courses");

  useEffect(() => {
    const getCourseList = async () => {
      try {
        const data = await getDocs(coursesCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        dispatch(setCourseList(filteredData));
        dispatch(setFilteredCourseList(filteredData)); // Set filteredCourseList to all courses by default
      } catch (error) {
        console.log(error);
      }
    };
    getCourseList();
  }, [dispatch]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));

    // Filter the course list based on the search query
    const filteredCourses = courseList.filter(
      (course) =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setFilteredCourseList(filteredCourses));
  };

  const handleCourseClick = (data) => {
    // Store the selected course details in local storage
    localStorage.setItem("selectedCourse", JSON.stringify(data));
  };
  return (
    <>
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a course"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search_input"
          />
          <button className="main-button">
            <Link to={"/student-dashboard"}> Student Dashboard</Link>
          </button>
        </div>
        <div className="flex_course_box">
          {filteredCourseList.length > 0 ? (
            filteredCourseList.map((data, id) => (
              <div key={id} className="card_course">
                <div className="course_name">
                  <h3>{data.name}</h3>
                </div>
                <div className="instructor_name">
                  <h3>{data.instructor}</h3>
                </div>
                <div className="flex-btn-details">
                  <img
                    src={data.thumbnail}
                    alt=""
                    height={"50px"}
                    width={"50px"}
                    className="img-course"
                  />
                  <button>
                    {" "}
                    <Link
                      to={`/course-details/${data.id}`}
                      onClick={() => handleCourseClick(data)}
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseList;
