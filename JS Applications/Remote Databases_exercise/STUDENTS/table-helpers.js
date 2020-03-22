export function addTableRow(tbody, studentInfo, studentId) {
    let tempRow = document.createElement('tr');
    tempRow.innerHTML = `
    <td>${studentId}</td>
    <td>${studentInfo.firstName}</td>
    <td>${studentInfo.lastName}</td>
    <td>${studentInfo.facultyNumber}</td>
    <td>${studentInfo.grade}</td>
  `
    tbody.appendChild(tempRow);
}

const filterEmptyValues = ([id, studentInfo]) => studentInfo !== null;
const sortById = (a, b) => Number(a[0]) - Number(b[0]);

export function loadStudentsTable(tableRef, studentsObj) {
    tableRef.innerHTML = '';

    Object.entries(studentsObj)
        .filter(filterEmptyValues) //this is needed because we start the students from "1" and "0" index in database remains empty;
        .sort(sortById)
        .map(([id, studentInfo]) => addTableRow(tableRef, studentInfo, id));
}