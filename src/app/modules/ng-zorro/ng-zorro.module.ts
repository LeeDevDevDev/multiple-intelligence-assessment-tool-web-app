import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [],
  exports: [
    NzButtonModule,
    NzLayoutModule,
    NzInputModule,
    NzGridModule,
    NzTypographyModule,
    NzFormModule,
    NzIconModule,
    NzAlertModule,
    NzMenuModule,
    NzDropDownModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzCardModule,
    NzAvatarModule,
    NzListModule
  ],
  imports: [CommonModule]
})
export class NgZorroModule {}
