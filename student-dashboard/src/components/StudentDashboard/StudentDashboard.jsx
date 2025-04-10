import React from 'react'
import './StudentDashboard.css'
function StudentDashboard() {
    const students = [
        {
          id: 1,
          name: "Alice",
          grade: 87,
          status: "active",
        },
        {
          id: 2,
          name: "Bob",
          grade: 45,
          status: "suspended",
        },
        {
          id: 3,
          name: "Charlie",
          grade: 76,
          status: "active",
        },
        {
          id: 4,
          name: "Daisy",
          grade: 92,
          status: "graduated",
        },
        {
          id: 5,
          name: "Ethan",
          grade: 58,
          status: "active",
        },
      ];
  return (
    <div>StudentDashboard</div>
  )
}

export default StudentDashboard