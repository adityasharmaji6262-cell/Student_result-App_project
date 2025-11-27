import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

const App = () => {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState('list'); // 'list' | 'add' | 'edit' | 'details'
  const [selected, setSelected] = useState(null);

  const refreshStudents = (list) => setStudents(list);

  return (
    <div className="app">
      <div className="header">
        <div className="title">
          <div className="card badge">Student Results</div>
          <div>
            <h1>Student Result App</h1>
            <div className="subtitle">Add, view, edit, and manage student results</div>
          </div>
        </div>

        <div className="actions-row">
          <div className="small-muted">Manual data loading: click "Load Students"</div>
        </div>
      </div>

      <div className="card">
        {mode === 'list' && (
          <StudentList
            students={students}
            onLoad={(list) => refreshStudents(list)}
            onAdd={() => { setSelected(null); setMode('add'); }}
            onEdit={(st) => { setSelected(st); setMode('edit'); }}
            onView={(st) => { setSelected(st); setMode('details'); }}
          />
        )}
        {(mode === 'add' || mode === 'edit') && (
          <div>
            <div style={{marginBottom:12}}>
              <button className="btn secondary" onClick={() => setMode('list')}>← Back to List</button>
            </div>
            <StudentForm
              mode={mode}
              student={selected}
              onDone={() => setMode('list')}
            />
          </div>
        )}
        {mode === 'details' && (
          <div>
            <div style={{marginBottom:12}}>
              <button className="btn secondary" onClick={() => setMode('list')}>← Back to List</button>
            </div>
            <StudentDetails student={selected} />
          </div>
        )}
      </div>

      <div style={{maxWidth:700, margin:'18px auto'}} className="center">
        <div className="small-muted">Project uses JSON Server at <strong>http://localhost:3001/students</strong></div>
      </div>
    </div>
  );
};

export default App;
