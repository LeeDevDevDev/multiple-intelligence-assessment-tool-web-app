import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/common/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  visible = false;
  constructor(
    private authService: AuthService,
    private messageService: NzMessageService
  ) {}

  ngOnInit(): void {}

  onSignOutClick() {
    this.authService.signOut('/login').catch(() => {
      this.messageService.create(
        'error',
        'Something went wrong. Try that again.'
      );
    });
  }
}
