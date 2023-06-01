import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Students: { Id: number; Name: string; password: string }[] = [];

  Name: string = '';
  password: string = '';
  Id: number = 0;
  spanUserName: string = '';
  spanUserAge: string = '';

  addStudent() {
    this.Id += 1;
    let Student: { Id: number; Name: string; password: string } = {
      Id: this.Id,
      Name: this.Name,
      password: this.password,
    };
    if (Student.Name.length > 5 && Student.password.length>8 )
      this.Students.push(Student);

    // if (Student.Name.length < 5)
    //   this.spanUserName = 'Student Name must be have atleast 6 characters';
    // else if (Student.password < 18)
    //   this.spanUserAge = 'Student must be larger than 18';
    // else this.Students.push(Student);
    this.Name = '';
    this.password = '';
  }

  deleteStudent(i: number) {
    this.Students = this.Students.filter((item, x) => x != i);
  }
}
