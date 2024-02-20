// enum RollNumbers{
//     faska, faiso, ahmed, ali,
// }

// enum RollNumbers {
//   faska=1,
//   faiso,
//   ahmed,
//   ali,
// }

const enum RollNumbers {
  faska,
  faiso,
  ahmed,
  ali,
}

let studentList: RollNumbers= RollNumbers.faiso

console.log(studentList)


// string enum types

// const enum StudentDetails{
//     name = 'faska',
//     major='developer'
// }
// let studentName: StudentDetails = StudentDetails.name
// console.log(studentName)


// Heterogeneous enums

const enum StudentDetails {
  ID=1,
  name = "faska",
  major = "developer",
}
let studentName: StudentDetails = StudentDetails.name;
let studentId: StudentDetails = StudentDetails.ID;
let studentMajor:StudentDetails=StudentDetails.major
console.log(`${studentId}-${studentName} has major in ${studentMajor}`);