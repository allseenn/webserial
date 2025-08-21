const subject = {
    user: "Math",
    credits: 3,
    teacher: {
        name: "John",
        age: 40
    },
    students: ["Piter", "Semen"],
    semester: 1
}

let {user, credits, teacher: {name, age}, students: [student1, student2], semester} = subject;
console.log(user, credits, name, age, student1, student2, semester);