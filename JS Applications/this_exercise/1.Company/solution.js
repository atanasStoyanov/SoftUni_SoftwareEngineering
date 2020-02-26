class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (isNotValid(name) || isNotValid(salary) || isNotValid(position) || isNotValid(department) || salary < 0) {
            throw new Error('Invalid input!');
        }

        function isNotValid(param) {
            if (param === '' || param === undefined || param === null) {
                return true
            }

            return false
        }

        let newEmployee = {
            name: name,
            salary: salary,
            position: position,
        }

        let targetDepartment = this.departments.find(d => d.department === department);

        if (!targetDepartment) {
            targetDepartment = {
                department: department,
                employees: []
            }

            this.departments.push(targetDepartment);
        }

        targetDepartment.employees.push(newEmployee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        const calculateAverageSalary = (employeesArr) =>  employeesArr.reduce((agr, empl) => agr += empl.salary, 0) / employeesArr.length;

        let sortedDepartmentsByAverageSalary = this.departments
            .sort((a, b) => calculateAverageSalary(b.employees) - calculateAverageSalary(a.employees));

        let bestDepartment = sortedDepartmentsByAverageSalary[0];
        let output = '';

        output += `Best Department is: ${bestDepartment.department}\n`;
        output += `Average salary: ${calculateAverageSalary(bestDepartment.employees).toFixed(2)}\n`;
        bestDepartment.employees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(e => output += `${e.name} ${e.salary} ${e.position}\n`);

        return output.trim();

    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Marketing");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());