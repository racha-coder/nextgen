class Student {
    name = "Some_Name";
    id = 1001
    constructor(name = null, id = "Student_Name") {
        this.name = name;
        this.id = id;
    }

    showDetails() {
        console.log(`Name of the Student is ${this.name}`)
        console.log(`Id of the Student is ${this.id}\n`)
    }
    logger() {
        console.log('This function just logs message to the console\n');
    }
}

const s = new Student();
const r = new Student("Student 2", 1002);

s.showDetails();
s.logger();
r.showDetails();
r.logger();