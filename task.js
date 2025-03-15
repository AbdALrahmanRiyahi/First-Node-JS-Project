const Courses = [
    { name: "Data Science Bootcamp", duration: "7 months", startDate: "2025-06-01" },
    { name: "Artificial Intelligence", duration: "6 months", startDate: "2025-06-15" },
    { name: "Blockchain Technology", duration: "4 months", startDate: "2025-07-01" },
    { name: "Digital Marketing", duration: "3 months", startDate: "2025-07-10" },
    { name: "Game Development", duration: "6 months", startDate: "2025-06-25" },
    { name: "Graphic Design Mastery", duration: "3 months", startDate: "2025-06-05" },
    { name: "Ethical Hacking", duration: "5 months", startDate: "2025-07-20" },
    { name: "Cloud Security", duration: "4 months", startDate: "2025-08-01" },
  ];
  
  const students = [
    { name: "Khalid", course: "Data Science Bootcamp", enrollmentDate: "2025-05-20" },
    { name: "Sara", course: "Artificial Intelligence", enrollmentDate: "2025-05-25" },
    { name: "Hassan", course: "Blockchain Technology", enrollmentDate: "2025-06-01" },
    { name: "Amal", course: "Digital Marketing", enrollmentDate: "2025-06-15" },
    { name: "Fahad", course: "Game Development", enrollmentDate: "2025-06-10" },
    { name: "Lama", course: "Graphic Design Mastery", enrollmentDate: "2025-05-30" },
    { name: "Tariq", course: "Ethical Hacking", enrollmentDate: "2025-07-05" },
    { name: "Mona", course: "Cloud Security", enrollmentDate: "2025-07-20" },
  ];
  
  const coursesWithStudents = Courses.map(course => {
    const enrolledStudents = students.filter(student => student.course === course.name);
    return { ...course, students: enrolledStudents.map(s => ({ name: s.name, enrollmentDate: s.enrollmentDate })) };
  });
  
  console.log(coursesWithStudents);
  
  function getCourseInfo(courseName) {
    const foundCourses = coursesWithStudents.filter(course => course.name.includes(courseName));
    console.log(foundCourses);
  }
  
  function addCourse(name, duration, startDate) {
    Courses.push({ name, duration, startDate });
  }
  
  function getStudentCourse(studentName) {
    const student = students.find((s) => s.name === studentName);
    if (!student) {
      console.log("Student not found.");
      return;
    }
    console.log(`Dear ${student.name}, you are enrolled in ${student.course}. Here is your course information:`);
    getCourseInfo(student.course);
  }
  
  addCourse("Python for Data Analysis", "5 months", "2025-08-10");
  console.log(Courses[8]);
  getCourseInfo("Science");
  getStudentCourse("Lama");
  