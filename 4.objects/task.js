function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks')) {
    let result = this.marks.reduce((a, b) => a + b);
    return result / this.marks.length;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
