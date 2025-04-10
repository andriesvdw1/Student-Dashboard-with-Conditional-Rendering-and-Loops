import React from 'react'
import './StudentCard.css'
function StudentCard({name, grade, status}) {
    switch (status) {
        case 'active':
            status = status + "🟢";
            break;
        
        case 'graduated':
            status = status + "🎓";
            break;

        case 'suspended':
            status = status + "❌";
            break;
    
        default:
            break;
    }
  return (
    <div className='student-card'>
        <div>{name}</div>
        <div>{grade}</div>
        <div>{status}</div>
        
return <li className="item">{name}</li>;
    </div>
  )
}

export default StudentCard