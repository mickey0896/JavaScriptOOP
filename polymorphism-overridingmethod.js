class User {
  #name;
  #password;

  constructor(name, password) {
    this.#name = name;
    this.#password = password;
  }
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.#name} รหัสผ่าน : ${this.#password}`);
  }
  set Name(newName) {
    this.#name = newName;
  }
  get Name() {
    return this.#name;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  get Password() {
    return this.#password;
  }
}

class Teacher extends User {
  #course;
  constructor(name, password, course) {
    super(name, password); 
    console.log("คุณครู");
    this.#course = course;
  }
  showDetail() {
    console.log(`ครูประจำวิชา : ${this.#course}`);
  }
}
class Student extends User {
  #score;
  constructor(name, password, score) {
    super(name, password);
    console.log("นักเรียน");
    this.#score = score;
  }
  showDetail() {
    console.log(`คะแนนของนักเรียน : ${this.#score} คะแนน`);
  }
}

const user1 = new Teacher("Teacher1", 123, "ภาษาไทย");
user1.showDetail();

const user2 = new Student("dekd", 321, 95);
user2.showDetail();
