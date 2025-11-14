import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';

const Catalog = () => (
  <div>
    <h2>Course Catalog</h2>
    <ul>
      {courses.map(course => (
        <li key={course.courseId}>
          <Link to={`/course/${course.courseId}`}>{course.title}</Link> - {course.department}
        </li>
      ))}
    </ul>
  </div>
);

export default Catalog;