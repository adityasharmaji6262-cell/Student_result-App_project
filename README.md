# Student_result-App_project
A simple React + JSON Server CRUD application to manage student results. Supports adding, editing, deleting, viewing details, searching, and filtering students. Built using functional components, useState, useEffect, and Fetch API.
Project structure-->
<img width="1041" height="638" alt="image" src="https://github.com/user-attachments/assets/08a59cfa-ea63-4f6a-aa9e-b933bd1e5166" />


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
