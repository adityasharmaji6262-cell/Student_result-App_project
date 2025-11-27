import React from 'react';

const StudentDetails = ({ student }) => {
  if (!student) return <div className="empty">No student selected.</div>;

  return (
    <div style={{marginTop:12}}>
      <h2>Student Details</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:10}}>
        <div className="card">
          <div className="kv"><strong>ID</strong></div>
          <div>{student.id}</div>
        </div>
        <div className="card">
          <div className="kv"><strong>Name</strong></div>
          <div>{student.name}</div>
        </div>
        <div className="card">
          <div className="kv"><strong>Section</strong></div>
          <div>{student.section}</div>
        </div>
        <div className="card">
          <div className="kv"><strong>Marks</strong></div>
          <div>{student.marks}</div>
        </div>
        <div className="card" style={{gridColumn:'1 / -1'}}>
          <div className="kv"><strong>Grade</strong></div>
          <div style={{fontSize:20, fontWeight:700}}>{student.grade}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
