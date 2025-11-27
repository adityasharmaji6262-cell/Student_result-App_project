import React, { useState } from 'react';
import * as service from '../services/studentService';

const StudentList = ({ students, onLoad, onAdd, onEdit, onView }) => {
  const [loading, setLoading] = useState(false);
  const [submittingDelete, setSubmittingDelete] = useState(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all'); // all | section | grade

  const load = async () => {
    setLoading(true);
    try {
      const list = await service.getStudents();
      onLoad(list);
      alert('Students loaded. Click Load Students again anytime to refresh.');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;
    setSubmittingDelete(id);
    try {
      await service.deleteStudent(id);
      alert('Deleted. Click Load Students to refresh the list.');
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmittingDelete(null);
    }
  };

  const matches = (s) => {
    const q = query.trim().toLowerCase();
    if (!q && filter === 'all') return true;
    const inName = s.name && s.name.toLowerCase().includes(q);
    const inSection = s.section && s.section.toLowerCase().includes(q);
    const inGrade = s.grade && s.grade.toLowerCase().includes(q);

    if (filter === 'section') return inSection || inName;
    if (filter === 'grade') return inGrade || inName;
    return inName || inSection || inGrade;
  };

  const filtered = students.filter(matches);

  return (
    <div>
      <div className="card-title">
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <div className="actions-row">
            <button className="btn" onClick={load} disabled={loading}>{loading ? <span className="spinner" /> : 'Load Students'}</button>
            <button className="btn secondary" onClick={onAdd}>Add Student</button>
          </div>
        </div>

        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <div className="search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <input placeholder="Search by name, section or grade" value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <select value={filter} onChange={e => setFilter(e.target.value)} className="search" style={{padding:'6px 10px'}}>
            <option value="all">All</option>
            <option value="section">Section</option>
            <option value="grade">Grade</option>
          </select>
        </div>
      </div>

      <div className="table-wrap">
        {students.length === 0 ? (
          <div className="empty">No students loaded. Click "Load Students" to fetch data.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan="6" className="center empty">No students match your search.</td></tr>
              )}
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.section}</td>
                  <td>{s.marks}</td>
                  <td>{s.grade}</td>
                  <td className="row-actions">
                    <button className="btn small" onClick={() => onEdit(s)}>Edit</button>
                    <button className="btn small secondary" onClick={() => handleDelete(s.id)} disabled={submittingDelete===s.id}>
                      {submittingDelete===s.id ? <span className="spinner" /> : 'Delete'}
                    </button>
                    <button className="btn small" onClick={() => onView(s)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentList;
