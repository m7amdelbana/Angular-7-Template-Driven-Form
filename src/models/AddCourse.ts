export class AddCourse {
  constructor(
    name: string,
    description: string,
    content: string,
    maxNumberOfStudents: number,
    numberOfSessions: number,
    price: number,
    instructorId: string,
    languageId: string,
    categoryId: string
  ) {
    this.name = name;
    this.description = description;
    this.content = content;
    this.maxNumbers = maxNumberOfStudents;
    this.numberOfSessions = numberOfSessions;
    this.price = price;
    this.instructorId = instructorId;
    this.languageId = languageId;
    this.categoryId = categoryId;
  }

  name: string;
  description: string;
  content: string;
  maxNumbers: number;
  numberOfSessions: number;
  price: number;
  instructorId: string;
  languageId: string;
  categoryId: string;
}
