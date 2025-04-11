import React from 'react'
import './StudentDashboard.css'
import StudentCard from '../StudentCard/StudentCard';
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
      let activeStudents = students.filter((student) =>
        student.status == "active" 
    )
      let honoursStudents = activeStudents.filter((student) =>
        student.grade >= 85)
  return (
    <div className='student-dashboard'>
        <h1>StudentDashboard:</h1>
        <div className="card-container">
            {students.map((student, index) =>
                <StudentCard key={index} name={student.name} grade={student.grade} status={student.status}/>           
            )}
            <br />
            <h2>Honours List:</h2>
            <p>
            {honoursStudents.length === 0 && <p>No honors students this term</p>}
            {
            
            honoursStudents.map((student, index) =>
                <StudentCard key={index} name={student.name} grade={student.grade} status={student.status}/>           
            )}
            </p>
        </div>
    </div>
  )
}

export default StudentDashboard