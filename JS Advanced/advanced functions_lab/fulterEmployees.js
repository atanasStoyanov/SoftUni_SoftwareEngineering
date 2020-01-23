function solve(data, criteria) {

    function splitCriteria(str) {
        return str.split('-');
    }

    function filterByProp(obj, prop, value) {
        return obj[prop] === value;
    }

    function formatEmployee(el, i) {
        return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;
    }

    if (criteria === 'All') {
        return JSON.parse(data)
            .map(formatEmployee)
    } else {
        return JSON.parse(data)
            .filter(el => filterByProp(el, ...splitCriteria(criteria)))
            .map(formatEmployee)
            .join('\n');
    }

}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
));
