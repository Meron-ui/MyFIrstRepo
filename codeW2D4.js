//Question Number 1
String.prototype.filterString = function (bannedArray) {
  const strList = this.split(" ");
  const filteredWord = strList.filter((x) => !bannedArray.includes(x));
  return filteredWord.join(" ");
};

//Question Nuber 2
Array.prototype.bubbleSort = function () {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (this[j] > this[j + 1]) {
        let tmp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = tmp;
      }
    }
  }
  return this;
};



//Question Number 3
var Person = function () { };
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

// TODO: create the class Teacher and a method teach
var Teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };
};
Teacher.prototype = new Person();
var him = new Teacher();


him.initialize("Prof. Meron", 45);
him.teach("History");
