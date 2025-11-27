import React, { useState, useEffect } from 'react';
import * as service from '../services/studentService';

const StudentForm = ({ mode, student, onDone }) => {
  const isEdit = mode === 'edit';
  const [name, setName] = useState(student ? student.name : '');
  const [section, setSection] = useState(student ? student.section : '');
  const [marks, setMarks] = useState(student ? student.marks : '');
  const [grade, setGrade] = useState(student ? student.grade : '');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (student) {
      setName(student.name || '');
      setSection(student.section || '');
      setMarks(student.marks || '');
      setGrade(student.grade || '');
    } else {
      setName(''); setSection(''); setMarks(''); setGrade('');
    }
  }, [student]);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = { name, section, marks, grade };
    try {
      if (isEdit) {
        await service.updateStudent(student.id, payload);
        alert('Student updated. Click Load Students to refresh.');
      } else {
        await service.addStudent(payload);
        alert('Student added. Click Load Students to refresh.');
      }
      onDone();
    } catch (err) {
      alert(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} style={{marginTop: 4}}>
      <h2 style={{marginTop:0}}>{isEdit ? 'Edit Student' : 'Add Student'}</h2>
      <div className="form-row">
        <div className="field">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Aditya" />
        </div>
        <div className="field">
          <label>Section</label>
          <input value={section} onChange={e => setSection(e.target.value)} required placeholder="e.g. A" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Marks</label>
          <input type="number" value={marks} onChange={e => setMarks(e.target.value)} required placeholder="e.g. 95" />
        </div>
        <div className="field">
          <label>Grade</label>
          <input value={grade} onChange={e => setGrade(e.target.value)} required placeholder="e.g. A" />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn" type="submit" disabled={submitting}>{submitting ? <span className="spinner lg-spinner" /> : (isEdit ? 'Save Changes' : 'Add Student')}</button>
        <button type="button" className="btn secondary" onClick={onDone} disabled={submitting}>Cancel</button>
      </div>
    </form>
  );
};

export default StudentForm;
