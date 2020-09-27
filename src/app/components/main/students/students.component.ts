import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/auth.model';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/common/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  isLoadingStudents: boolean;
  students: User[];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.students) {
      this.isLoadingStudents = true;
    }
    this.authService.user$.subscribe(currentUser => {
      this.userService.getStudents(currentUser.uid).subscribe(studentRes => {
        this.students = studentRes;
        this.isLoadingStudents = false;
      });
    });
  }
}
