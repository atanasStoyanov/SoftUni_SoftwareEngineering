import { extractFormData, clearForm } from './form-helpers.js';
import { getAllStudents, createStudent, errorHandler } from "./firebase-requsts.js";
import { loadStudentsTable } from './table-helpers.js';

(function () {
    const formRef = document.querySelector('form');
    const tBodyRef = document.querySelector('tbody');

    formRef.addEventListener('submit', addNewStudent);

    //show students table when page is initialy loaded;
    getAllStudents()
        .then((res) => loadStudentsTable(tBodyRef, res))
        .catch(errorHandler);

    function addNewStudent(e) {
        e.preventDefault();

        const formInputs = ['firstName', 'lastName', 'facultyNumber', 'grade'];
        let parsedFormInputs = extractFormData(e.target, formInputs);

        getAllStudents()
            .then(students => {
                let nextStudentId = !students ? 1 : Object.keys(students).length;

                createStudent(parsedFormInputs, nextStudentId)
                    .then(() => getAllStudents())
                    .then((students) => loadStudentsTable(tBodyRef, students))
                    .catch(errorHandler);

                clearForm(e.target);
            })
            .catch(errorHandler);
    }
}());

