import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/Courses';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.courseId === courseId);

  if (!course) return <h2>Course not found</h2>;

  return (
    <div>
      <h2>Course Details</h2>
      <p><strong>ID:</strong> {course.courseId}</p>
      <p><strong>Title:</strong> {course.title}</p>
      <p><strong>Department:</strong> {course.department}</p>
    </div>
  );
};

export default CourseDetail;