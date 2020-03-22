export const apiKey = 'https://testapp-1c79d.firebaseio.com/'; // add your firebase URL here;

const JSONParser = (x) => x.json()

export const getAllStudents = () => {
    return fetch(`${apiKey}students.json`).then(JSONParser);
};

export const createStudent = (studentBody, studentId) => {
    return fetch(`${apiKey}students/${studentId}.json`, {
        method: 'PUT',
        body: JSON.stringify(studentBody)
    }).then(JSONParser);
};

export const errorHandler = (err) => console.log(err);