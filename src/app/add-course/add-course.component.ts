import { Component, OnInit, Input } from '@angular/core';

// Models
import { AddCourse } from './../../models/AddCourse';
import { Category } from './../../models/Category';
import { Language } from './../../models/Language';
import { Instructor } from 'src/models/Instructor';
import { User } from 'src/models/User';
import { Token } from './../../models/Token';
import { SignForm } from 'src/models/SignForm';

// API Service
import { DataService } from 'src/api/data.service';

// Manger
import { TokenManager } from 'src/managers/TokenManger';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: AddCourse;
  instructors$: Instructor[];
  categories$: Category[];
  languages$: Language[];

  // Lists
  selectedInstructor: string;
  selectedLanguage: string;
  selectedCategory: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    // Login user
    this.loginUser();

    // Get user account
    this.getUserAccount();

    // Get Instructors
    this.getInstructors();

    // Get Languages
    this.getLanguages();

    // Get Categories
    this.getCategories();
  }

  loginUser() {
    // 1. Create Sign form
    const signForm = new SignForm('center@gmail.com', '123456');
    // 2. Send data to api
    this.data.loginUser(signForm).subscribe(
      data => {
        const token = new Token();
        token.accessToken = data['x-auth-token'];
        // Save accessToken in Local Storage
        const tokenManager = new TokenManager();
        tokenManager.store(token);
        console.log('Token Saved: ' + tokenManager.retrieve().accessToken);
      }
    );
  }

  getUserAccount() {
    this.data.getUserAccount().subscribe(
      data => {
        let user = new User();
        user = data;
        console.log('Get User Account: ' + user.email);
      }
    );
  }

  getInstructors() {
    this.data.getInstructors().subscribe(
      data => {
        this.instructors$ = data;
        console.log('Get instructors: ' + this.instructors$);
        this.selectedInstructor = this.instructors$[0]._id;
      }
    );
  }

  getLanguages() {
    this.data.getLanguages().subscribe(
      data => {
        this.languages$ = data;
        console.log('Get languages: ' + this.languages$);
        this.selectedLanguage = this.languages$[0]._id;
      }
    );
  }

  getCategories() {
    this.data.getCategories().subscribe(
      data => {
        this.categories$ = data;
        console.log('Get categories: ' + this.categories$);
        this.selectedCategory = this.categories$[0]._id;
      }
    );
  }

  addCourse(name: string, description: string, content: string, maxNumberOfStudents: number,
    numberOfSessions: number, price: number) {

      this.addCourseForm = new AddCourse(
        name,
        description,
        content,
        maxNumberOfStudents,
        numberOfSessions,
        price,
        this.selectedInstructor,
        this.selectedLanguage,
        this.selectedCategory);

        console.log('Form data:' + JSON.stringify(this.addCourseForm));
        this.submitAddCourse(this.addCourseForm);
  }

  submitAddCourse(form: AddCourse) {
    this.data.addCourse(form).subscribe(
      data => {
        console.log('Course Added Successfully.');
      }
    );
  }
}
