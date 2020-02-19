class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('There is not enough space on the hard drive');
        }

        let program = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    }

    uninstallAProgram(name) {
        let program = this.installedPrograms.find(p => p.name === name);

        if (!program) {
            throw new Error('Control panel is not responding');
        }

        let programSpace = program.requiredSpace;
        this.installedPrograms = this.installedPrograms.filter(p => p.name !== name);
        this.hddMemory += programSpace;

        return this.installedPrograms;
    }

    openAProgram(name) {
        let program = this.installedPrograms.find(p => p.name === name);
        let programIsOpen = this.taskManager.find(p => p.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        if (programIsOpen) {
            throw new Error(`The ${name} is already open`);
        }

        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let totalRamUsage = this.taskManager.reduce((agr, p) => agr += p.ramUsage, 0);
        let totalCpuUsage = this.taskManager.reduce((agr, p) => agr += p.cpuUsage, 0);

        if (totalRamUsage + ramUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (totalCpuUsage + cpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let currentProgramSpecs = {
            name,
            ramUsage,
            cpuUsage
        }

        this.taskManager.push(currentProgramSpecs);

        return currentProgramSpecs;
    }

    taskManagerView() {

        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        return this.taskManager.reduce((agr, program) => {
            agr += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%\n`;

            return agr;
        }, '')
            .trim();
    }

}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());


