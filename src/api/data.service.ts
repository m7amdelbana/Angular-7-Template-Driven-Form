import { Category } from './../models/Category';
import { Language } from './../models/Language';
import { User } from './../models/User';
import { TokenManager } from './../managers/TokenManger';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { AddCourse } from './../models/AddCourse';
import { SignForm } from 'src/models/SignForm';
import { Observable } from 'rxjs';
import { Instructor } from 'src/models/Instructor';

// Routes URLs
// Add Your Base URL.
const BASE_URL = 'https://yourDomainHere.com/api/';
// User
const SERVICES_USERS_LOGIN = 'users/login';
const SERVICES_USERS_GET_ACCOUNT = 'users/me';
// Center
const SERVICES_CENTERS_ADD_COURSE = 'courses/add';
// Instructor
const SERVICES_INSTRUCTORS_GET = 'instructors';
const SERVICES_INSTRUCTORS_GET_BY_CENTER_ID = 'instructors/center';
// Language
const SERVICES_LANGUAGES_GET = 'languages';
// Category
const SERVICES_CATEGORIES_GET = 'categories';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiHeaders = new HttpHeaders({
    'x-auth-token': this.getAccessToken() });
    options = { headers: this.apiHeaders };

  loginUser(signForm: SignForm) {
    return this.http.post( BASE_URL + SERVICES_USERS_LOGIN, signForm);
  }

  getUserAccount(): Observable<User> {
    return this.http.get<User>( BASE_URL + SERVICES_USERS_GET_ACCOUNT, this.options);
  }

  addCourse(addCourse: AddCourse) {
    return this.http.post( BASE_URL + SERVICES_CENTERS_ADD_COURSE, addCourse, this.options);
  }

  getAccessToken() {
    const tokenManager = new TokenManager();
    return tokenManager.retrieve().accessToken.toString();
  }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>( BASE_URL + SERVICES_INSTRUCTORS_GET);
  }

  getInstructorsByCenterId(centerId: String): Observable<Instructor[]> {
    return this.http.get<Instructor[]>( BASE_URL + SERVICES_INSTRUCTORS_GET_BY_CENTER_ID + '/' + centerId);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>( BASE_URL + SERVICES_LANGUAGES_GET);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>( BASE_URL + SERVICES_CATEGORIES_GET);
  }
}
