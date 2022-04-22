const student_db = [
  {
    id: 1,
    name: "Harry Potter",
    teacherId: 4,
    subject: 1
  },
  {
    id: 2,
    name: "Hermione Granger",
    teacherId: 3,
    subject: 1
  },
  {
    id: 3,
    name: "Ron Weasley",
    teacherId: 5,
    subject: 1
  },
  {
    id: 4,
    name: "Draco Malfoy",
    teacherId: 4,
    subject: 1
  },
  {
    id: 5,
    name: "Padma Patil",
    teacherId: 3,
    subject: 1
  },
  {
    id: 6,
    name: "Luna Lovegood",
    teacherId: 5,
    subject: 1
  }
];

const teacher_db = [
  {
    id: 1,
    name: "Professor Dumbledore",
    isPresent: true,
    subject: 1,
    designation: 1
  },
  {
    id: 2,
    name: "Minerva McGonagall",
    isPresent: true,
    subject: 1,
    designation: 2
  },
  {
    id: 3,
    name: "Rubeus Hagrid",
    isPresent: true,
    subject: 1,
    designation: 3
  },
  {
    id: 4,
    name: "Horace Slughorn",
    isPresent: true,
    subject: 1,
    designation: 4
  },
  {
    id: 5,
    name: "Severus Snape",
    isPresent: true,
    subject: 1,
    designation: 4
  },
  {
    id: 6,
    name: "Alastor Moody",
    isPresent: true,
    subject: 1,
    designation: 3
  },
  {
    id: 7,
    name: "Remus Lupin",
    isPresent: true,
    subject: 1,
    designation: 4
  },
  {
    id: 8,
    name: "Gilderoy Lockhart",
    isPresent: true,
    subject: 1,
    designation: 4
  }
];

const subject_db = [
  {
    id: 1,
    name: "Potions Master",
    hod: 3,
    professor: [4, 5]
  },
  {
    id: 2,
    hod: 6,
    name: "Defense Against the Dark Arts",
    professor: [7, 8]
  },
];

const designation_db = [
  { id: 1, name: 'HEAD', teachers: [1] },
  { id: 2, name: 'VICE', teachers: [2] },
  { id: 3, name: 'HOD', teachers: [3, 6] },
  { id: 4, name: 'PROF', teachers: [4, 5, 7, 8] }]


export { subject_db, designation_db, teacher_db, student_db }
