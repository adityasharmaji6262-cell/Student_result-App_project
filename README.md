# Student_result-App_project
A simple React + JSON Server CRUD application to manage student results. Supports adding, editing, deleting, viewing details, searching, and filtering students. Built using functional components, useState, useEffect, and Fetch API.
Project structure-->
student-result-app/
│
├── db.json                   # JSON Server database storing students
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx   # Shows all students + search, filter, delete
│   │   ├── StudentForm.jsx   # Add & Edit form
│   │   └── StudentDetails.jsx# View full student info
│   │
│   ├── services/
│   │   └── studentService.js # API calls (GET/POST/PUT/DELETE)
│   │
│   ├── App.jsx               # Main app, state manager, screen controller
│   ├── index.js              # React entry point
│   └── styles.css            # Custom UI styling
│
└── public/
    └── index.html

How the App Works
🔹 App.jsx

Acts as the brain of the project:

Stores main states

Switches between screens (list, add, edit, details)

Passes selected student and callbacks to components

🔹 StudentList.jsx

Displays all students, handles:

Load

Add

Edit

Delete

View details

Filters & search

🔹 StudentForm.jsx

Handles:

Adding new students

Editing existing students

Form validation

Submitting data to JSON Server

🔹 StudentDetails.jsx

Shows full information about a selected student.

🔹 studentService.js

Contains all API functions:

getStudents()

addStudent()

updateStudent()

deleteStudent()
